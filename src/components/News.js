import React, { Component } from "react";
import Newsitems from "./Newsitems";

export default class News extends Component {

  articles = [
    {
      "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
      "author": "Virginia Trioli",
      "title": "This week I watched my old friend Sam Mostyn named governor-general and her success felt sweet",
      "description": "In the Bluey Cricket episode Rusty's parents would have lived every moment of the failing and succeeding that got him to the top. I've watched something similar happen this week from a much greater distance.",
      "url": "https://www.abc.net.au/news/2024-04-06/bluey-cricket-sam-mostyn-success-of-friends/103674140",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/e409d4a2f00e84295d45739617f63887?impolicy=wcms_watermark_news&cropH=2793&cropW=4965&xPos=0&yPos=0&width=862&height=485&imformat=generic",
      "publishedAt": "2024-04-05T20:00:00Z",
      "content": "There's that one moment in that one Bluey episode when two hands meet one small, awkward and from the past; one gloved, grown and in the very real present of an Australian Test game that gets me ever… [+4545 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey-Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
                  <Newsitems  title = {element.title.slice(0,45)} description={element.description.slice(0,84)} imageUrl={element.urlToImage} url={element.url}/>
                </div>
            })}
          </div>
      </div>
    );
  }
}
