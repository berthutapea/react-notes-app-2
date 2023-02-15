import React, { useEffect, useState } from 'react'
import HomepageAction from '../components/index/HomePageAction'
import NoteListEmpty from '../components/notes/NoteListEmpty'
import NotesList from '../components/notes/NotesList'
import { getArchivedNotes } from '../utils/local-data'

export default function IndexPage() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search !== '') {
      setNotes(
        getArchivedNotes()
          .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      setNotes(getArchivedNotes())
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>Archive</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder="Search for notes..."
          value={search}
          onChange={handleSearch}
        />
      </section>
      {notes.length > 0 && <NotesList notes={notes} />}
      {notes.length === 0 && <NoteListEmpty />}
      <HomepageAction />
    </section>
  )
}
