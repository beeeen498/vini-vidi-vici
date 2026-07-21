import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <button>
        <a href="/">Back to Home</a>
      </button>
    </div>
  );
}
