import { useEffect } from "react";

const PriceCoin = () => {
  useEffect(() => {
    // const widgetContainer = document.getElementById("coinmarket-widget");
    // const widget = document.getElementById("coinmarketcap-widget-marquee");
    // widgetContainer.appendChild(widget);
  }, []) 

  return (
    <>
      <div className="priceCoin">
        <div style={{marginTop:"20px"}} id="coinmarket-widget" />
        
      </div>
    </>
  );
}

export default PriceCoin