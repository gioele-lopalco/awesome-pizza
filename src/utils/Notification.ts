'use client'
import { NotificationInstance } from 'antd/es/notification/interface'

export const openNotification = (api: NotificationInstance) => {
  api.success({
    message: 'Order placed',
    description: 'Your order has been successfully placed!!',
    placement: 'topRight',
  })
}