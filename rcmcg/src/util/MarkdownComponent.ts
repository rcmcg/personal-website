export interface MarkdownComponent {
  text: string
}

interface p extends MarkdownComponent {}
interface ol extends MarkdownComponent {}
interface li extends MarkdownComponent {}

