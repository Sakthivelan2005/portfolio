import { blogs } from "../data/Blogs";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  return (
    <section className={styles.section} id="blog">
      <h2>Blog</h2>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <span>{blog.date}</span>
            <p>{blog.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
