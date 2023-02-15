import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Editor } from 'react-draft-wysiwyg'
import {
  ContentState, convertFromHTML, EditorState, convertToRaw
} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import AddNewPageAction from '../../components/notes/AddNewPageAction'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { addNote } from '../../utils/local-data'

export default function NotesNewPages() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('<b><i>Your notes here...</i></b>')
      )
    )
  })

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }))
  }

  const handleSave = () => {
    const { title } = form
    const body = draftToHtml(convertToRaw(form.body.getCurrentContent()))
    addNote({ title, body })
    navigate('/')
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <Editor
          editorState={form.body}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <AddNewPageAction
        handleSave={handleSave}
      />
    </section>

  )
}
