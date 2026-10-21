interface MobileMenuProps {
  open: boolean;
  onToggle: () => void;
}

/** Burger button shown below 1100px; toggles the `.open` state of the navbar. */
export default function MobileMenu({ open, onToggle }: MobileMenuProps) {
  return (
    <button className="burger" id="sec1-burger" aria-label="Menu" aria-expanded={open} onClick={onToggle}>
      ☰
    </button>
  );
}
