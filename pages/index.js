export default function Home() {
  return (
    <div className="home">
      Website is under development...
      <a onClick={() => window.location.href = '/admin/login'}>Login</a>
    </div>
  )
}
