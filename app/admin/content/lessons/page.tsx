// app/admin/content/lessons/page.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Spinner, Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  Select, SelectItem, Textarea, Tooltip
} from '@heroui/react'
import { PlusIcon, EditIcon, TrashIcon, EyeIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Language {
  id: string
  code: string
  name: string
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

interface Lesson {
  id: string
  chapter: Chapter
  type: string
  contentJson: any
  xpReward: number
  coinReward: number
}

export default function AdminLessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null)
  const [newLesson, setNewLesson] = useState({
    chapterId: '', type: 'vocab', contentJson: {}, xpReward: 10, coinReward: 5
  })
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [lessonsRes, chaptersRes] = await Promise.all([
        fetch('/api/admin/content/lessons'),
        fetch('/api/admin/content/chapters')
      ])

      if (!lessonsRes.ok) throw new Error('Failed to fetch lessons')
      if (!chaptersRes.ok) throw new Error('Failed to fetch chapters')

      const lessonsData = await lessonsRes.json()
      const chaptersData = await chaptersRes.json()
      
      setLessons(lessonsData)
      setChapters(chaptersData)
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditingLesson(null)
    setNewLesson({ chapterId: '', type: 'vocab', contentJson: {}, xpReward: 10, coinReward: 5 })
    setIsModalOpen(true)
  }

  const openEditModal = (lesson: Lesson) => {
    setEditingLesson(lesson)
    setNewLesson({
      chapterId: lesson.chapter.id,
      type: lesson.type,
      contentJson: lesson.contentJson,
      xpReward: lesson.xpReward,
      coinReward: lesson.coinReward,
    })
    setIsModalOpen(true)
  }

  const handleSaveLesson = async () => {
    try {
      let res
      const payload = {
        ...newLesson,
        contentJson: typeof newLesson.contentJson === 'string' && newLesson.contentJson.length > 0
          ? JSON.parse(newLesson.contentJson)
          : newLesson.contentJson, // If it's already an object or empty, use it directly
        xpReward: Number(newLesson.xpReward),
        coinReward: Number(newLesson.coinReward),
      }

      if (editingLesson) {
        // Update existing lesson
        res = await fetch(`/api/admin/content/lessons/${editingLesson.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        // Add new lesson
        res = await fetch('/api/admin/content/lessons', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      if (!res.ok) throw new Error('Failed to save lesson')
      fetchData()
      setIsModalOpen(false)
    } catch (err) {
      console.error('Error saving lesson:', err)
    }
  }

  const handleDeleteLesson = async (id: string) => {
    if (!confirm(`Are you sure you want to delete lesson with ID: ${id}?`)) return
    try {
      const res = await fetch(`/api/admin/content/lessons/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete lesson')
      fetchData()
    } catch (err) {
      console.error('Error deleting lesson:', err)
    }
  }

  const lessonTypes = ['vocab', 'grammar', 'listen', 'speak', 'write', 'read', 'dialogue']

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Lessons</h1>
        <Button startContent={<PlusIcon />} color="primary" onClick={openAddModal}>
          Add Lesson
        </Button>
      </div>

      {loading ? (
        <Spinner size="lg" />
      ) : (
        <Table aria-label="Lessons Table">
          <TableHeader>
            <TableColumn>LANGUAGE</TableColumn>
            <TableColumn>STAGE</TableColumn>
            <TableColumn>CHAPTER</TableColumn>
            <TableColumn>TYPE</TableColumn>
            <TableColumn>XP/COINS</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody items={lessons}>
            {(lesson) => (
              <TableRow key={lesson.id}>
                <TableCell>{lesson.chapter.stage.language.name}</TableCell>
                <TableCell>Stage {lesson.chapter.stage.stageNumber}</TableCell>
                <TableCell>Chapter {lesson.chapter.chapterNum}</TableCell>
                <TableCell>{lesson.type}</TableCell>
                <TableCell>{lesson.xpReward} XP / {lesson.coinReward} Coins</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Tooltip content="Preview Lesson">
                    <Button isIconOnly size="sm" variant="light" onPress={() => router.push(`/lesson/${lesson.id}`)}>
                      <EyeIcon size={18} />
                    </Button>
                  </Tooltip>
                  <Button isIconOnly size="sm" variant="light" onPress={() => openEditModal(lesson)}>
                    <EditIcon size={18} />
                  </Button>
                  <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => handleDeleteLesson(lesson.id)}>
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
              <ModalHeader className="flex flex-col gap-1">{editingLesson ? 'Edit Lesson' : 'Add New Lesson'}</ModalHeader>
              <ModalBody>
                <Select
                  label="Chapter"
                  selectedKeys={newLesson.chapterId ? [newLesson.chapterId] : []}
                  onSelectionChange={(keys) => setNewLesson(prev => ({ ...prev, chapterId: Array.from(keys)[0] as string }))}
                >
                  {chapters.map((chapter) => (
                    <SelectItem key={chapter.id}>
                      {chapter.stage.language.name} - Stage {chapter.stage.stageNumber} - Ch {chapter.chapterNum}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Lesson Type"
                  selectedKeys={newLesson.type ? [newLesson.type] : []}
                  onSelectionChange={(keys) => setNewLesson(prev => ({ ...prev, type: Array.from(keys)[0] as string }))}
                >
                  {lessonTypes.map((type) => (
                    <SelectItem key={type}>{type}</SelectItem>
                  ))}
                </Select>
                <Textarea
                  label="Content JSON"
                  value={JSON.stringify(newLesson.contentJson, null, 2)}
                  onValueChange={(val) => {
                    try {
                      setNewLesson(prev => ({ ...prev, contentJson: JSON.parse(val) }))
                    } catch (e) {
                      // Invalid JSON, keep as string to allow user to fix
                      setNewLesson(prev => ({ ...prev, contentJson: val }))
                    }
                  }}
                  minRows={8}
                />
                <Input
                  label="XP Reward"
                  type="number"
                  value={String(newLesson.xpReward)}
                  onValueChange={(val) => setNewLesson(prev => ({ ...prev, xpReward: Number(val) }))}
                />
                <Input
                  label="Coin Reward"
                  type="number"
                  value={String(newLesson.coinReward)}
                  onValueChange={(val) => setNewLesson(prev => ({ ...prev, coinReward: Number(val) }))}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSaveLesson}>
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
