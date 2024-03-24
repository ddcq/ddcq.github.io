const Heart = () => (
  <svg className="heart w-full h-auto absolute top-0 left-0 opacity-0" width="102px" height="88px" viewBox="0 0 102 88" enableBackground="new 0 0 102 88">
    <path className="fill-current" d="M51,13c0-0-0-0-0-0c0,0-0,0-0,0.2C31-11,0,0.2,0,29c0,27.6,41,56.9,51,59c10-2,51-31,51-59C102,0,71-11,51,13z" />
  </svg>
)

export default function Hearts() {
  return (
    <div className="w-screen h-screen overflow-hidden -z-0 top-0 fixed">
      <Heart />
      <Heart />
      <Heart />
      <Heart />
      <Heart />
    </div>
  )
}
