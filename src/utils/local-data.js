let notes = [
  {
    id: 'notes-1',
    title: 'Babel',
    body: '<b>Babel</b> merupakan <i>tools open-source</i> yang digunakan untuk mengubah sintaks <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-3',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  }
]

function getAllNotes() {
  return notes
}

function getNote(id) {
  const foundedNote = notes.find((note) => note.id === id)
  return foundedNote
}

function getActiveNotes() {
  const activeNotes = notes.filter((note) => !note.archived)
  return activeNotes
}

function getArchivedNotes() {
  const archivedNotes = notes.filter((note) => note.archived)
  return archivedNotes
}

function addNote({ title, body }) {
  notes = [...notes, {
    id: `notes-${+new Date()}`, title: title || '(untitled)', body, createdAt: new Date().toISOString(), archived: false
  }]
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id)
}

function archiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: true }
    }
    return note
  })
}

function unarchiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: false }
    }

    return note
  })
}

function editNote({ id, title, body }) {
  const noteToEdit = notes.find((note) => note.id === id)
  noteToEdit.title = title
  noteToEdit.body = body

  notes = notes.map((note) => {
    if (note.id === id) {
      return note
    }
    return note
  })
}

export {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote
}
