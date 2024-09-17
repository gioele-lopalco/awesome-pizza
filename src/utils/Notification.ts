'use client'

import { notification } from 'antd'

export const openNotification = () => {
    notification.success({
      message: 'Ordine effettuato',
      description: 'Il tuo ordine è stato registrato con successo!',
      placement: 'topRight',
    })
}