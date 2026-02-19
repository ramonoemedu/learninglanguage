// app/admin/content/languages/page.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Spinner, Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  Switch, Textarea
} from '@heroui/react'
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Language {
  id: string
  code: string
  name: string
  flag: string
  active: boolean
}

export default function AdminLanguagesPage() {
  const [languages, setLanguages] = useState<Language[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingLanguage, setEditingLanguage] = useState<Language | null>(null)
  const [newLanguage, setNewLanguage] = useState({ code: '', name: '', flag: '', active: true })
  const router = useRouter()

  useEffect(() => {
    fetchLanguages()
  }, [])

  const fetchLanguages = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/content/languages')
      if (!res.ok) throw new Error('Failed to fetch languages')
      const data = await res.json()
      setLanguages(data)
    } catch (err) {
      console.error('Error fetching languages:', err)
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditingLanguage(null)
    setNewLanguage({ code: '', name: '', flag: '', active: true })
    setIsModalOpen(true)
  }

  const openEditModal = (language: Language) => {
    setEditingLanguage(language)
    setNewLanguage({ code: language.code, name: language.name, flag: language.flag, active: language.active })
    setIsModalOpen(true)
  }

  const handleSaveLanguage = async () => {
    try {
      let res
      if (editingLanguage) {
        // Update existing language
        res = await fetch(`/api/admin/content/languages/${editingLanguage.code}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newLanguage),
        })
      } else {
        // Add new language
        res = await fetch('/api/admin/content/languages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newLanguage),
        })
      }

      if (!res.ok) throw new Error('Failed to save language')
      fetchLanguages()
      setIsModalOpen(false)
    } catch (err) {
      console.error('Error saving language:', err)
    }
  }

  const handleDeleteLanguage = async (code: string) => {
    if (!confirm(`Are you sure you want to delete language with code: ${code}?`)) return
    try {
      const res = await fetch(`/api/admin/content/languages/${code}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete language')
      fetchLanguages()
    } catch (err) {
      console.error('Error deleting language:', err)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Languages</h1>
        <Button startContent={<PlusIcon />} color="primary" onClick={openAddModal}>
          Add Language
        </Button>
      </div>

      {loading ? (
        <Spinner size="lg" />
      ) : (
        <Table aria-label="Languages Table">
          <TableHeader>
            <TableColumn>CODE</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>FLAG</TableColumn>
            <TableColumn>ACTIVE</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody items={languages}>
            {(lang) => (
              <TableRow key={lang.id}>
                <TableCell>{lang.code}</TableCell>
                <TableCell>{lang.name}</TableCell>
                <TableCell className="text-2xl">{lang.flag}</TableCell>
                <TableCell>{lang.active ? 'Yes' : 'No'}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button isIconOnly size="sm" variant="light" onPress={() => openEditModal(lang)}>
                    <EditIcon size={18} />
                  </Button>
                  <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => handleDeleteLanguage(lang.code)}>
                    <TrashIcon size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}

      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{editingLanguage ? 'Edit Language' : 'Add New Language'}</ModalHeader>
              <ModalBody>
                <Input
                  label="Code (e.g., zh, en)"
                  value={newLanguage.code}
                  onValueChange={(val) => setNewLanguage(prev => ({ ...prev, code: val }))}
                  isDisabled={!!editingLanguage} // Code cannot be changed for existing languages
                />
                <Input
                  label="Name (e.g., Chinese (Mandarin))"
                  value={newLanguage.name}
                  onValueChange={(val) => setNewLanguage(prev => ({ ...prev, name: val }))}
                />
                <Textarea
                  label="Flag Emoji"
                  value={newLanguage.flag}
                  onValueChange={(val) => setNewLanguage(prev => ({ ...prev, flag: val }))}
                />
                <Switch
                  isSelected={newLanguage.active}
                  onValueChange={(val) => setNewLanguage(prev => ({ ...prev, active: val }))}
                >
                  Active
                </Switch>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSaveLanguage}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
