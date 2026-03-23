import { Toaster as HotToaster } from 'react-hot-toast'

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#1e293b',
          color: '#fff',
          border: '1px solid rgba(16, 185, 129, 0.3)',
        },
        success: {
          iconTheme: { primary: '#10b981', secondary: '#fff' },
        },
      }}
    />
  )
}
