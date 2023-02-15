import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import { showFormattedDate } from '../../utils'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../utils/local-data'
import NotesIdPageAction from '../../components/notes/NotesIdPageAction'
import NotFoundMessage from '../../components/layout/NotFoundMessage'

export default function NotesIdPages() {
  const [note, setNote] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/notes/${id}/sunting`)
  }

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(id)
      navigate('/archives')
    } else {
      archiveNote(id)
      navigate('/')
    }
  }

  const handleDelete = () => {
    deleteNote(id)
    navigate('/')
  }

  useEffect(() => {
    const showNote = getNote(id)
    if (showNote) {
      setNote(showNote)
    }
  }, [])

  return (
    <section className="detail-page">
      {'id' in note ? (
        <>
          <Link
            to="/"
            title="Back"
          >
            <HiArrowLeft />
            {' '}
            Back
          </Link>
          <h3 className="detail-page__title">
            {note.title}
          </h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="detail-page__body">
            {parser(note.body)}
          </div>
        </>
      ) : (
        <NotFoundMessage />
      )}
      <NotesIdPageAction
        archived={note.archived || false}
        handleEdit={handleEdit}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </section>
  )
}
