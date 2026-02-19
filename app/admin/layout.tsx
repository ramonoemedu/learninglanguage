// app/admin/layout.tsx
'use client'

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navLinks = [
    { href: '/admin', label: 'Overview' },
    { href: '/admin/users', label: 'Users' },
    { href: '/admin/content/languages', label: 'Languages' },
    { href: '/admin/content/chapters', label: 'Chapters' },
    { href: '/admin/content/vocabulary', label: 'Vocabulary' },
    { href: '/admin/content/lessons', label: 'Lessons' },
    { href: '/admin/analytics', label: 'Analytics' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar>
        <NavbarBrand>
          <Link href="/admin">
            <p className="font-bold text-inherit">Admin Panel</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navLinks.map(link => (
            <NavbarItem key={link.href} isActive={pathname === link.href}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/dashboard" variant="flat">
              Back to App
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="p-8">
        {children}
      </main>
    </div>
  )
}
