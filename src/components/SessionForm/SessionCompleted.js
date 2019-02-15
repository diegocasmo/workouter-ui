import React, {useState} from 'react'
import {SessionStatistics} from './SessionStatistics'

export const SessionCompleted = ({session, onSubmit, onSubmitSuccess, onSubmitFailure}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await onSubmit(session)
      setIsSubmitting(false)
      onSubmitSuccess()
    } catch (err) {
      setIsSubmitting(false)
      onSubmitFailure(err.message ? err.message : Object.values(err))
    }
  }
  return (
    <>
      <SessionStatistics session={session}/>
      <button
        type='submit'
        disabled={isSubmitting}
        onClick={handleSubmit}>Save</button>
    </>
  )
}
