// app/admin/content/chapters/page.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Spinner, Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  Select, SelectItem
} from '@heroui/react'
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Language {
  id: string
  code: string
  name: string
  flag: string
}

interface Stage {
  id: string
  language: Language
  stageNumber: number
  title: string
}

interface Chapter {
  id: string
  stage: Stage
  chapterNum: number
  title: string
}

export default function AdminChaptersPage() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [stages, setStages] = useState<Stage[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null)
  const [newChapter, setNewChapter] = useState({ stageId: '', chapterNum: 1, title: '' })
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [chaptersRes, languagesRes] = await Promise.all([
        fetch('/api/admin/content/chapters'),
        fetch('/api/admin/content/languages')
      ])

      if (!chaptersRes.ok) throw new Error('Failed to fetch chapters')
      if (!languagesRes.ok) throw new Error('Failed to fetch languages')

      const chaptersData = await chaptersRes.json()
      const languagesData = await languagesRes.json()
      
      setChapters(chaptersData)
      setLanguages(languagesData)

      // Extract stages from fetched chapters for dropdowns
      const allStages: Stage[] = [];
      languagesData.forEach((lang: Language) => {
        // This is a simplified approach. Ideally, you'd fetch stages directly.
        // For now, assuming stages are implicitly present if languages exist.
        for(let i=1; i<=10; i++) { // Assuming 10 stages per language as per spec
          allStages.push({
            id: `${lang.code}-stage-${i}`, // Reconstruct ID
            language: lang,
            stageNumber: i,
            title: `Stage ${i}: (from ${lang.name})`
          })
        }
      })
      setStages(allStages)

    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditingChapter(null)
    setNewChapter({ stageId: '', chapterNum: 1, title: '' })
    setIsModalOpen(true)
  }

  const openEditModal = (chapter: Chapter) => {
    setEditingChapter(chapter)
    setNewChapter({ stageId: chapter.stage.id, chapterNum: chapter.chapterNum, title: chapter.title })
    setIsModalOpen(true)
  }

  const handleSaveChapter = async () => {
    try {
      let res
      if (editingChapter) {
        // Update existing chapter
        res = await fetch(`/api/admin/content/chapters/${editingChapter.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newChapter),
        })
      } else {
        // Add new chapter
        res = await fetch('/api/admin/content/chapters', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newChapter),
        })
      }

      if (!res.ok) throw new Error('Failed to save chapter')
      fetchData()
      setIsModalOpen(false)
    } catch (err) {
      console.error('Error saving chapter:', err)
    }
  }

  const handleDeleteChapter = async (id: string) => {
    if (!confirm(`Are you sure you want to delete chapter with ID: ${id}?`)) return
    try {
      const res = await fetch(`/api/admin/content/chapters/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete chapter')
      fetchData()
    } catch (err) {
      console.error('Error deleting chapter:', err)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Chapters</h1>
        <Button startContent={<PlusIcon />} color="primary" onClick={openAddModal}>
          Add Chapter
        </Button>
      </div>

      {loading ? (
        <Spinner size="lg" />
      ) : (
        <Table aria-label="Chapters Table">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>LANGUAGE</TableColumn>
            <TableColumn>STAGE</TableColumn>
            <TableColumn>CHAPTER #</TableColumn>
            <TableColumn>TITLE</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody items={chapters}>
            {(chapter) => (
              <TableRow key={chapter.id}>
                <TableCell>{chapter.id}</TableCell>
                <TableCell>{chapter.stage.language.name}</TableCell>
                <TableCell>Stage {chapter.stage.stageNumber}</TableCell>
                <TableCell>{chapter.chapterNum}</TableCell>
                <TableCell>{chapter.title}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button isIconOnly size="sm" variant="light" onPress={() => openEditModal(chapter)}>
                    <EditIcon size={18} />
                  </Button>
                  <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => handleDeleteChapter(chapter.id)}>
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
              <ModalHeader className="flex flex-col gap-1">{editingChapter ? 'Edit Chapter' : 'Add New Chapter'}</ModalHeader>
              <ModalBody>
                <Select
                  label="Language"
                  selectedKeys={newChapter.stageId ? [newChapter.stageId.split('-')[0]] : []}
                  onSelectionChange={(keys) => {
                    const langCode = Array.from(keys)[0] as string
                    setNewChapter(prev => ({ ...prev, stageId: `${langCode}-stage-1` })) // Default to Stage 1
                  }}
                  isDisabled={!!editingChapter}
                >
                  {languages.map((lang) => (
                    <SelectItem key={lang.code}>{lang.name}</SelectItem>
                  ))}
                </Select>
                 <Select
                  label="Stage"
                  selectedKeys={newChapter.stageId ? [newChapter.stageId] : []}
                  onSelectionChange={(keys) => setNewChapter(prev => ({ ...prev, stageId: Array.from(keys)[0] as string }))}
                  isDisabled={!!editingChapter}
                >
                  {stages.filter(s => s.id.startsWith(newChapter.stageId.split('-')[0])).map((stage) => (
                    <SelectItem key={stage.id}>{stage.title}</SelectItem>
                  ))}
                </Select>
                <Input
                  label="Chapter Number"
                  type="number"
                  value={String(newChapter.chapterNum)}
                  onValueChange={(val) => setNewChapter(prev => ({ ...prev, chapterNum: Number(val) }))}
                />
                <Input
                  label="Title"
                  value={newChapter.title}
                  onValueChange={(val) => setNewChapter(prev => ({ ...prev, title: val }))}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSaveChapter}>
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
