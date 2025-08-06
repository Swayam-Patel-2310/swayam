
const DataScienceIcon = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Outer Circle */}
      <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-pulse"></div>
      
      {/* Inner Design - Data Nodes and Connections */}
      <div className="relative w-20 h-20">
        {/* Central Node */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full shadow-primary"></div>
        
        {/* Data Points */}
        <div className="absolute top-2 left-1/2 w-3 h-3 -translate-x-1/2 bg-secondary rounded-full shadow-secondary animate-pulse delay-300"></div>
        <div className="absolute bottom-2 left-1/2 w-3 h-3 -translate-x-1/2 bg-secondary rounded-full shadow-secondary animate-pulse delay-500"></div>
        <div className="absolute left-2 top-1/2 w-3 h-3 -translate-y-1/2 bg-secondary rounded-full shadow-secondary animate-pulse delay-700"></div>
        <div className="absolute right-2 top-1/2 w-3 h-3 -translate-y-1/2 bg-secondary rounded-full shadow-secondary animate-pulse delay-900"></div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/2 left-1/2 w-px h-6 -translate-x-1/2 -translate-y-3 bg-gradient-to-t from-primary to-secondary opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-6 -translate-x-1/2 translate-y-3 bg-gradient-to-b from-primary to-secondary opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-px -translate-y-1/2 -translate-x-3 bg-gradient-to-l from-primary to-secondary opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-px -translate-y-1/2 translate-x-3 bg-gradient-to-r from-primary to-secondary opacity-70"></div>
        
        {/* Diagonal Connections */}
        <div className="absolute top-1/2 left-1/2 w-8 h-px -translate-y-1/2 -translate-x-4 rotate-45 bg-gradient-to-r from-primary/50 to-secondary/50 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-px -translate-y-1/2 -translate-x-4 -rotate-45 bg-gradient-to-r from-primary/50 to-secondary/50 opacity-60"></div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-4 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default DataScienceIcon;
