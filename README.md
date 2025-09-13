# 🎨 Fancy UI

A modern, accessible React component library built with TypeScript, TailwindCSS, and Radix Primitives.

## ✨ Features

- 🎯 **TypeScript First** - Comprehensive type safety and IntelliSense support
- 🎨 **TailwindCSS Powered** - Utility-first styling with full customization
- 🌙 **Dark Mode Support** - Built-in dark mode with CSS variables
- ♿ **Accessible** - WCAG compliant components built on Radix Primitives
- 🛠️ **Developer Experience** - Tree-shakable, well-documented APIs
- 🚀 **Modern Build** - ESM and CJS builds with Vite

## 📦 Installation

```bash
npm install @fancy-ui-lib/fancy-ui
```

## 🚀 Quick Start

```tsx
import { Button, Input, Modal, DatePicker } from '@fancy-ui-lib/fancy-ui'
import '@fancy-ui-lib/fancy-ui/styles'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <div className="p-4 space-y-4">
      <Button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      
      <Input placeholder="Enter your name" />
      
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Select a date"
      />
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome"
        description="This is a sample modal"
      >
        <p>Modal content goes here!</p>
      </Modal>
    </div>
  )
}
```

## 🌙 Dark Mode Setup

Add the `dark` class to your document element to enable dark mode:

```tsx
// Toggle dark mode
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
}

// Or use a state-driven approach
useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [isDark])
```

## 📚 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@fancy-ui-lib/fancy-ui'

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🎯</Button>

// States
<Button disabled>Disabled</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'outline' \| 'ghost' \| 'link' \| 'destructive'` | `'default'` | Button style variant |
| `size` | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Button size |
| `asChild` | `boolean` | `false` | Render as child element |
| `disabled` | `boolean` | `false` | Disable the button |

### Input

A styled input component with error state support.

```tsx
import { Input } from '@fancy-ui-lib/fancy-ui'

<Input placeholder="Enter text" />
<Input type="email" placeholder="Enter email" />
<Input type="password" placeholder="Enter password" />
<Input error placeholder="Error state" />
<Input disabled placeholder="Disabled state" />
```

#### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `error` | `boolean` | `false` | Show error state styling |
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | - | Input placeholder text |
| `disabled` | `boolean` | `false` | Disable the input |

### Modal

An accessible modal dialog built on Radix Dialog.

```tsx
import { Modal } from '@fancy-ui-lib/fancy-ui'

const [isOpen, setIsOpen] = useState(false)

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  description="Modal description"
  size="md"
>
  <div className="space-y-4">
    <p>Your modal content here</p>
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => setIsOpen(false)}>
        Confirm
      </Button>
    </div>
  </div>
</Modal>
```

#### Modal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Control modal visibility |
| `onClose` | `() => void` | - | Callback when modal closes |
| `title` | `string` | - | Modal title |
| `description` | `string` | - | Modal description |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Modal size |
| `children` | `ReactNode` | - | Modal content |

### DatePicker

A date picker component built with react-day-picker and Radix Popover.

```tsx
import { DatePicker } from '@fancy-ui-lib/fancy-ui'

const [date, setDate] = useState<Date>()

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date"
/>

// With constraints
<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select future date"
  minDate={new Date()}
  maxDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
/>
```

#### DatePicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | - | Selected date |
| `onChange` | `(date: Date \| undefined) => void` | - | Date change callback |
| `placeholder` | `string` | `'Pick a date'` | Placeholder text |
| `disabled` | `boolean` | `false` | Disable the picker |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |

## 🎨 Customization

The library uses CSS variables for theming. You can customize the design by overriding these variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  /* ... other variables */
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Run linting
npm run lint
```

## 📄 License

MIT © Fancy UI Team

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
