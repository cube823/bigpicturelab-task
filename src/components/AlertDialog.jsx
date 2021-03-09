import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const AlertDialog = (props) => {
  const [open, setOpen] = useState(true)
  const { error } = props

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {error ? error.message : '400 Bad Request'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontSize: 18, fontWeight: '700' }}
          >
            {'동 정보를 불러오는 과정에서 에러가 발생했습니다.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertDialog
