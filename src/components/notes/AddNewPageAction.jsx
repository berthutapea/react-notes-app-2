import React from 'react'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import PageAction from '../layout/PageAction'

function AddNewPageAction({ handleSave }) {
  const navigate = useNavigate()

  return (
    <PageAction page="add-new-page">
      <>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => navigate('/')}
        >
          <HiX />
        </button>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => handleSave()}
        >
          <HiCheck />
        </button>
      </>
    </PageAction>
  )
}

AddNewPageAction.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default AddNewPageAction
