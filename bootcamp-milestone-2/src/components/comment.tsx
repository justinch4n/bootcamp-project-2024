import styles from "./comment.module.css"

type IComment = {
    user: string;
    comment: string;
    date: Date;
  };
  
  type CommentProps = {
    comment: IComment;
  };
  
  function parseCommentTime(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(date).toLocaleString("en-US", options);
  }
  
  function Comment({ comment }: CommentProps) {
    return (
      <div className={styles.comment}>
        <h4 className={styles.commentUser}>{comment.user}</h4>
        <p className={styles.commentMessage}>{comment.comment}</p>
        <span className={styles.date}>
          {parseCommentTime(comment.date)}
        </span>
      </div>
    );
  }
  
  export default Comment;