'use client'

import { useEffect, useState, useRef } from 'react'
import { io } from 'socket.io-client'

// Connect to your WebSocket server
// const socket = io('http://localhost:3005', {
//   autoConnect: false,
// })

export default function Chat() {
  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')

  // useRef for Socket Instance: The useRef hook is used to store the Socket.IO client instance. This ensures that the instance persists across re-renders of the component without causing re-initialization.
  const socketRef = useRef(null)

  useEffect(() => {
    // Initialize the Socket.IO client on component mount
    socketRef.current = io('http://localhost:3005')

    if (socketRef.current.connected) {
      onConnect()
    }

    function onConnect() {
      setIsConnected(true)
      console.log('connected to server')
    }

    function onDisconnect() {
      setIsConnected(false)
      console.log('disconnected from server')
    }

    function onMessage(value) {
      setMessages((previous) => [...previous, value])
    }

    socketRef.current.on('connect', onConnect)
    socketRef.current.on('disconnect', onDisconnect)
    socketRef.current.on('message', onMessage)

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
        socketRef.current.off('connect', onConnect)
        socketRef.current.off('disconnect', onDisconnect)
        socketRef.current.off('message', onMessage)
      }
    }
  }, [])

  const sendMessage = () => {
    socketRef.current.emit('message', inputText)
    setInputText('')
  }

  return (
    <>
      <h2>Chat: {isConnected ? '連線中' : '離線'}</h2>
      <div
        style={{
          height: '200px',
          overflow: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
        }}
      >
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <hr />
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}
