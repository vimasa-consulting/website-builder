export default function Page() {
  return (
    <div>
      <div id="widgetIframeRTVC">
        <p>Real Time visitor count </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=Live&actionToWidgetize=getSimpleLastVisitCount&idSite=11&period=day&date=yesterday"
        />
      <p>Visitors Over time </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?forceView=1&viewDataTable=graphEvolution&module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=11&period=day&date=yesterday"
        />

        <p>Visitors Overview </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&containerId=VisitOverviewWithGraph&disableLink=1&widget=1&moduleToWidgetize=CoreHome&actionToWidgetize=renderWidgetContainer&idSite=11&period=day&date=yesterday"
        />
        <p>Visitors Map </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=UserCountryMap&actionToWidgetize=visitorMap&idSite=11&period=day&date=yesterday"
        />
        <p>Click Tracking </p>
        <div id="widgetIframe">
        <iframe 
            width="100%" 
            height="350" 
            src="https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&secondaryDimension=eventAction&disableLink=1&widget=1&moduleToWidgetize=Events&actionToWidgetize=getCategory&idSite=31&period=year&date=2023-12-20" 
            />
                  
        </div>
    </div>    
    </div>
  );
}
