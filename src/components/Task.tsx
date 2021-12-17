import React, { ReactElement } from 'react'
import { ITask } from 'types'

interface Props {
  task: ITask;
}

export default function Task({}: Props): ReactElement {
  return (
    <div>
      hello world
    </div>
  )
}
