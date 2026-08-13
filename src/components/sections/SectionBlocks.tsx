import type { ContentBlockItem } from '../../content/types';
import './sectionBlocksStyle.css';

interface SectionBlocksProps {
  blocks: ContentBlockItem[];
}

const SectionBlocks = ({ blocks }: SectionBlocksProps) => {
  return (
    <section className="page-section section-blocks">
      <div className="page-container">
        {blocks.map((block, i) => {
          switch (block.type) {
            case 'heading': {
              const Tag = `h${block.level ?? 2}` as keyof JSX.IntrinsicElements;
              return (
                <Tag key={i} className="section-heading">
                  {block.content as string}
                </Tag>
              );
            }
            case 'paragraph':
              return (
                <p key={i} className="block-paragraph">
                  {block.content as string}
                </p>
              );
            case 'list':
              return (
                <ul key={i} className="block-list">
                  {(block.content as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            case 'highlight-list':
              return (
                <ul key={i} className="block-highlight-list">
                  {(block.content as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default SectionBlocks;
