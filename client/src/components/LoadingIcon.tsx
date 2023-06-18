const LoadingIcon = () => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: 3 }, () => (
        <div className="w-1 h-1 bg-white rounded-full mr-1 animate-pulse" />
      ))}
    </div>
  )
}

export default LoadingIcon
