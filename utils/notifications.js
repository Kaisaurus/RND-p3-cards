import React from 'react'
import { Notifications, Permissions } from 'expo'

export function clearLocalNotification() {
  Notifications.cancelAllScheduledNotificationsAsync
}

function createNotification() {
  return {
    title: 'Complete a Quiz!',
    body: "👋 don't forget to complete a Quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification() {
  Permissions.askAsync(Permissions.NOTIFICATIONS)
    .then(({ status }) => {
      if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync()

        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(20)
        tomorrow.setMinutes(0)

        Notifications.scheduleLocalNotificationAsync(
          createNotification(),
          {
            time: tomorrow,
            repeat: 'day',
          }
        )
      }
    })
}
