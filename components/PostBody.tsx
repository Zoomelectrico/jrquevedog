/* eslint-disable react/no-danger */
import markdownStyles from './markdown-styles.module.css';

type PostProps = {
  content: string;
};

const PostBody = ({ content }: PostProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
