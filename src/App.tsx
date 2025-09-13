import { useState, useEffect } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Modal } from './components/Modal'
import { DatePicker } from './components/DatePicker'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Fancy UI Demo</h1>
            <p className="text-muted-foreground">Component library with TailwindCSS and Radix Primitives</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsDark(!isDark)}
            className="ml-4"
          >
            {isDark ? '☀️' : '🌙'} {isDark ? 'Light' : 'Dark'} Mode
          </Button>
        </div>

        {/* Button Component Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Button Component</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🎯</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </div>

        {/* Input Component Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Input Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <Input 
              placeholder="Regular input" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input placeholder="Email input" type="email" />
            <Input placeholder="Password input" type="password" />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Error state" error />
            <Input placeholder="Number input" type="number" />
          </div>
        </div>

        {/* DatePicker Component Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">DatePicker Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <DatePicker
              placeholder="Select a date"
              value={selectedDate}
              onChange={setSelectedDate}
            />
            <DatePicker
              placeholder="With min/max dates"
              value={selectedDate}
              onChange={setSelectedDate}
              minDate={new Date()}
              maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
            />
            <DatePicker
              placeholder="Disabled datepicker"
              disabled
            />
          </div>
          {selectedDate && (
            <p className="text-sm text-muted-foreground">
              Selected date: {selectedDate.toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Modal Component Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Modal Component</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          </div>
          
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Example Modal"
            description="This is a demo of the Modal component with TailwindCSS styling and dark mode support."
            size="md"
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This modal is built using Radix Dialog primitives with custom styling.
                It includes focus trapping, escape key handling, and proper accessibility attributes.
              </p>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setModalOpen(false)}>
                  Confirm
                </Button>
              </div>
            </div>
          </Modal>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-semibold mb-2">TypeScript Support</h3>
            <p className="text-sm text-muted-foreground">
              All components are fully typed with comprehensive TypeScript support.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-semibold mb-2">Dark Mode</h3>
            <p className="text-sm text-muted-foreground">
              Built-in dark mode support with CSS variables and class-based theming.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p className="text-sm text-muted-foreground">
              Components follow WCAG guidelines with proper ARIA attributes and keyboard navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
