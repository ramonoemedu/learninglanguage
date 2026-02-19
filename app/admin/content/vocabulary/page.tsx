// app/admin/content/vocabulary/page.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Spinner, Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  Select, SelectItem, Textarea
} from '@heroui/react'
import { PlusIcon, EditIcon, TrashIcon, Volume2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Language {
  id: string
  code: string
  name: string
}

interface Vocabulary {
  id: string
  language: Language
  word: string
  romanization: string | null
  ipa: string | null
  translation: string
  audioUrl: string | null
  imageUrl: string | null
  difficulty: number
}

export default function AdminVocabularyPage() {
  const [vocabulary, setVocabulary] = useState<Vocabulary[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingVocab, setEditingVocab] = useState<Vocabulary | null>(null)
  const [newVocab, setNewVocab] = useState({
    languageId: '', word: '', romanization: '', ipa: '', translation: '', audioUrl: '', imageUrl: '', difficulty: 1
  })
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [vocabRes, languagesRes] = await Promise.all([
        fetch('/api/admin/content/vocabulary'),
        fetch('/api/admin/content/languages')
      ])

      if (!vocabRes.ok) throw new Error('Failed to fetch vocabulary')
      if (!languagesRes.ok) throw new Error('Failed to fetch languages')

      const vocabData = await vocabRes.json()
      const languagesData = await languagesRes.json()
      
      setVocabulary(vocabData)
      setLanguages(languagesData)
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditingVocab(null)
    setNewVocab({ languageId: '', word: '', romanization: '', ipa: '', translation: '', audioUrl: '', imageUrl: '', difficulty: 1 })
    setIsModalOpen(true)
  }

  const openEditModal = (vocab: Vocabulary) => {
    setEditingVocab(vocab)
    setNewVocab({
      languageId: vocab.language.id,
      word: vocab.word,
      romanization: vocab.romanization || '',
      ipa: vocab.ipa || '',
      translation: vocab.translation,
      audioUrl: vocab.audioUrl || '',
      imageUrl: vocab.imageUrl || '',
      difficulty: vocab.difficulty,
    })
    setIsModalOpen(true)
  }

  const handleSaveVocab = async () => {
    try {
      let res
      if (editingVocab) {
        // Update existing vocab
        res = await fetch(`/api/admin/content/vocabulary/${editingVocab.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newVocab),
        })
      } else {
        // Add new vocab
        res = await fetch('/api/admin/content/vocabulary', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newVocab),
        })
      }

      if (!res.ok) throw new Error('Failed to save vocabulary')
      fetchData()
      setIsModalOpen(false)
    } catch (err) {
      console.error('Error saving vocabulary:', err)
    }
  }

  const handleDeleteVocab = async (id: string) => {
    if (!confirm(`Are you sure you want to delete vocabulary item with ID: ${id}?`)) return
    try {
      const res = await fetch(`/api/admin/content/vocabulary/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete vocabulary')
      fetchData()
    } catch (err) {
      console.error('Error deleting vocabulary:', err)
    }
  }

  const playAudio = (url: string | null) => {
    if (url) {
      new Audio(url).play()
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Vocabulary</h1>
        <Button startContent={<PlusIcon />} color="primary" onClick={openAddModal}>
          Add Vocabulary
        </Button>
      </div>

      {loading ? (
        <Spinner size="lg" />
      ) : (
        <Table aria-label="Vocabulary Table">
          <TableHeader>
            <TableColumn>LANGUAGE</TableColumn>
            <TableColumn>WORD</TableColumn>
            <TableColumn>ROMANIZATION</TableColumn>
            <TableColumn>TRANSLATION</TableColumn>
            <TableColumn>AUDIO</TableColumn>
            <TableColumn>DIFFICULTY</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody items={vocabulary}>
            {(vocab) => (
              <TableRow key={vocab.id}>
                <TableCell>{vocab.language.name}</TableCell>
                <TableCell>{vocab.word}</TableCell>
                <TableCell>{vocab.romanization}</TableCell>
                <TableCell>{vocab.translation}</TableCell>
                <TableCell>
                  {vocab.audioUrl && (
                    <Button isIconOnly size="sm" variant="light" onPress={() => playAudio(vocab.audioUrl)}>
                      <Volume2 size={18} />
                    </Button>
                  )}
                </TableCell>
                <TableCell>{vocab.difficulty}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button isIconOnly size="sm" variant="light" onPress={() => openEditModal(vocab)}>
                    <EditIcon size={18} />
                  </Button>
                  <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => handleDeleteVocab(vocab.id)}>
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
              <ModalHeader className="flex flex-col gap-1">{editingVocab ? 'Edit Vocabulary' : 'Add New Vocabulary'}</ModalHeader>
              <ModalBody>
                <Select
                  label="Language"
                  selectedKeys={newVocab.languageId ? [newVocab.languageId] : []}
                  onSelectionChange={(keys) => setNewVocab(prev => ({ ...prev, languageId: Array.from(keys)[0] as string }))}
                  isDisabled={!!editingVocab}
                >
                  {languages.map((lang) => (
                    <SelectItem key={lang.id}>{lang.name}</SelectItem>
                  ))}
                </Select>
                <Input
                  label="Word"
                  value={newVocab.word}
                  onValueChange={(val) => setNewVocab(prev => ({ ...prev, word: val }))}
                />
                <Input
                  label="Romanization"
                  value={newVocab.romanization || ''}
                  onValueChange={(val) => setNewVocab(prev => ({ ...prev, romanization: val }))}
                />
                <Input
                  label="IPA"
                  value={newVocab.ipa || ''}
                  onValueChange={(val) => setNewVocab(prev => ({ ...prev, ipa: val }))}
                />
                <Input
                  label="Translation"
                  value={newVocab.translation}
                  onValueChange={(val) => setNewVocab(prev => ({ ...prev, translation: val }))}
                />
                <Input
                  label="Audio URL"
                  value={newVocab.audioUrl || ''}
                  onValueChange={(val) => setNewVocab(prev => ({ ...prev, audioUrl: val }))}
                />
                <Input
                  label="Image URL"
                  value={newVocab.imageUrl || ''}
                  onValueChange={(val) => setNewVocab(prev => ({ ...prev, imageUrl: val }))}
                />
                <Input
                  label="Difficulty (1-5)"
                  type="number"
                  value={String(newVocab.difficulty)}
                  onValueChange={(val) => setNewVocab(prev => ({ ...prev, difficulty: Number(val) }))}
                  min={1} max={5}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSaveVocab}>
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
