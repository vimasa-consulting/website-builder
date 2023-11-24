export default function Page() {
  return (
    <div>
      <div id="widgetIframeRTVC">
        <p>Real Time visitor count </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://ec2-3-218-241-8.compute-1.amazonaws.com/index.php?module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=Live&actionToWidgetize=getSimpleLastVisitCount&idSite=19&period=day&date=yesterday"
        />
      <p>Visitors Over time </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://ec2-3-218-241-8.compute-1.amazonaws.com/index.php?forceView=1&viewDataTable=graphEvolution&module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=19&period=day&date=yesterday"
        />

        <p>Visitors Overview </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://ec2-3-218-241-8.compute-1.amazonaws.com/index.php?module=Widgetize&action=iframe&containerId=VisitOverviewWithGraph&disableLink=1&widget=1&moduleToWidgetize=CoreHome&actionToWidgetize=renderWidgetContainer&idSite=19&period=day&date=yesterday"
        />
        <p>Visitors Map </p>
        <iframe 
          width="100%" 
          height="350" 
          src="https://ec2-3-218-241-8.compute-1.amazonaws.com/index.php?module=Widgetize&action=iframe&disableLink=1&widget=1&moduleToWidgetize=UserCountryMap&actionToWidgetize=visitorMap&idSite=19&period=day&date=yesterday"
        />
    </div>    
    </div>
  );
}
