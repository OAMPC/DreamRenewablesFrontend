import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './markdown.module.scss';

type Props = {
  rawMarkdown: string;
};

const Markdown: React.FC<Props> = ({ rawMarkdown }) => {
  return (
    <div data-testid="markdown-component">
      <ReactMarkdown
        components={{
          img: ({ ...props }) => (
            <img {...props} className={`${styles.markdownImage} my-5`} />
          ),
        }}
      >
        {rawMarkdown}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
