import React from 'react'
import PropTypes from 'prop-types'
import { HiCheck } from 'react-icons/hi'
import PageAction from '../layout/PageAction'

function NotesIdEditPageAction({ handleSave }) {
  return (
    <PageAction page="detail-page">
      <button
        className="action"
        type="button"
        title="Save"
        onClick={() => handleSave()}
      >
        <HiCheck />
      </button>
    </PageAction>
  )
}

NotesIdEditPageAction.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default NotesIdEditPageAction
