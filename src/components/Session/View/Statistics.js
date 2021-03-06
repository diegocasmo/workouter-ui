import React from 'react'
import { Duration } from '../../Time/Duration'
import { RoundsCompleted } from './RoundsCompleted'

export const SessionStatistics = ({ session }) => (
  <>
    <RoundsCompleted
      rounds={session.rounds}
      roundsCompleted={session.roundsCompleted}
    />
    <Duration start={session.startedAt} stop={session.finishedAt} />
  </>
)
