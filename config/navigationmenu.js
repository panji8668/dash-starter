import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { CgComponents } from 'react-icons/cg'
const navigation = [
  { name: 'Dashboard', href: '/home', icon: HomeIcon, current: true },
  {
    name: 'DigitalProduct',
    href: '#',
    icon: UsersIcon,
    current: false,
    submenu: [
      { name: 'Products', href: '/digital/products' },
      { name: 'Supliers', href: '/digital/suppliers' },
    ],
  },
  {
    name: 'Logs',
    href: '/projects',
    icon: FolderIcon,
    current: false,
    submenu: [
      { name: 'Inbox', href: '/logs/inbox' },
      { name: 'Outbox', href: '/logs/outbox' },
    ],
  },
  { name: 'E-Commerce', href: '#', icon: ShoppingCartIcon, current: false },
  { name: 'Transactions', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  {
    name: 'UI Component',
    href: '/components',
    icon: CgComponents,
    current: false,
    submenu: [
      { name: 'Toast', href: '/components/toast' },
      { name: 'Dialog', href: '/components/dialog' },
      { name: 'Table', href: '/components/table' },
      { name: 'App Editor', href: '/components/appdesign' },
    ],
  },
]

export default navigation
