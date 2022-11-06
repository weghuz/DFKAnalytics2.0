export default function HeroOwnerName({ children }) {
  if (children.owner == null) return children.owner
  if (children.owner.name == "undefined") return null
  return children.owner.name
}
