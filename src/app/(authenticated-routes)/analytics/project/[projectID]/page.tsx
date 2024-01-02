export default function Page({ params }: { params: { projectID: string } }) {

  const idSite=params.projectID; // TODO: update from project data;
  const linkRealTime=`https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=Live&actionToWidgetize=getSimpleLastVisitCount&idSite=${idSite}&period=day&date=yesterday`;
  const linkVisitorsOverTime=`https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?forceView=1&viewDataTable=graphEvolution&module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=${idSite}&period=day&date=yesterday`;
  const linkVisitorsOverview=`https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&containerId=VisitOverviewWithGraph&disableLink=1&widget=1&moduleToWidgetize=CoreHome&actionToWidgetize=renderWidgetContainer&idSite=${idSite}&period=day&date=yesterday`;
  const linkVisitorsMap=`https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=UserCountryMap&actionToWidgetize=visitorMap&idSite=${idSite}&period=day&date=yesterday`;
  const linkClickTracking=`https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=Widgetize&action=iframe&secondaryDimension=eventAction&disableLink=1&widget=1&moduleToWidgetize=Events&actionToWidgetize=getCategory&idSite=${idSite}&period=year&date=yesterday0`;
  return (
    <div>
      <div id="widgetIframeRTVC">
        <p>Real Time visitor count </p>
        <iframe 
          width="100%" 
          height="350" 
          src={linkRealTime}
        />
        <p>Visitors Over time </p>
        <iframe 
          width="100%" 
          height="350" 
          src={linkVisitorsOverTime}
        />
        <p>Visitors Overview </p>
        <iframe 
          width="100%" 
          height="350" 
          src={linkVisitorsOverview}
        />
        <p>Visitors Map </p>
        <iframe 
          width="100%" 
          height="350" 
          src={linkVisitorsMap}
        />
        <p>Click Tracking </p>
        <div id="widgetIframe">
        <iframe 
            width="100%" 
            height="350" 
            src={linkClickTracking}
            />
                  
        </div>
    </div>    
    </div>
  );
}
