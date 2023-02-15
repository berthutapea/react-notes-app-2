import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import PageAction from '../layout/PageAction'

export default function HomePageAction() {
  const navigate = useNavigate()

  return (
    <PageAction page="homepage">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => navigate('/notes/new')}
      >
        <HiPlus />
      </button>
    </PageAction>
  )
}
