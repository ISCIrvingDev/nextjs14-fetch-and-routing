import Link from "next/link";

export default function NavigationComponent() {
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/info">Info</Link></li>
    </ul>
  )
}