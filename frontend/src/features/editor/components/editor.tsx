import { MinimalTiptapEditor } from '@/components/shadcn/ui/minimal-tiptap';
import type { Content } from '@tiptap/react';
import { useState } from 'react';

export const Editor = () => {
  const [value, setValue] = useState<Content>('');

  return (
    <MinimalTiptapEditor
      value={value}
      onChange={setValue}
      className="w-full"
      editorContentClassName="p-5"
      output="html"
      placeholder="Enter your description..."
      autofocus={true}
      editable={true}
      editorClassName="focus:outline-hidden"
    />
  );
};
