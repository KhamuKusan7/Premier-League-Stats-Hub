import React from "react";
import "./Hall_of_Fame.css";

const Hall_of_Fame = () => {
  return (
    <div className="Hall_of_Fame">
      <section className="HOF">
        <h1>Hall of Fame Inductee</h1>
      </section>

      <section className="Profile">
      <div className="Hazard"></div>
      <div className="summary">
        <div className="title">Eden Hazard</div>
        <div className="description">
          <p><b>Mercurial winger</b> who dazzled with his dribbling and skills.</p>
          <p>Hazard claims to be one of the most electrifying and entertaining players of his generation.</p> 
          <p>Scored 85 goals and notched 54 assists in Premier League across seven seasons at Chelsea.</p>
          <p>Whether it was gliding past defenders or creating moments of pure inspiration, his play embodies the attacking flair that defines the Premier League at its very best.</p>
        </div>
      </div>
      </section>
      {/* <section className="Henry"></section>
      <div className="summary">
        <div className="title">Thiery Henry</div>
        <div className="description">Captain, talisman, scorer, provider - the man who could make it all look easy</div>
      </div> */}
      <section className="Profile">
        <div className="Henry"></div>
        <div className="summary">
          <div className="title">Thiery Henry</div>
          <div className="description"><p> <b>Captain, Talisman, Scorer, Provider</b> - the man who could make it all look easy.</p>
            <p>Henry gave Premier League defenders nightmares for eight seasons.</p>
            <p>Scored over 20 goals for five seasons running, claiming 4 Golden Boots.</p>
            <p>Not content with just scoring he provided 74 assists, including a record 20 in 2002/03, and he won two Player of the Season awards.</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Aguero"></div>
        <div className="summary">
          <div className="title">Sergio Aguero</div>
          <div className="description"><p><b>The most prolific striker in Premier League history.</b></p>
          <p>Scoring twice in both his first and last Premier League appearances summed up how Aguero was the competition's most prolific striker over his 10 years in England.</p>
          <p>The Argentinian's total of 184 Premier League goals is the most by an overseas player.</p>
          <p>Aguero put his name in Man City folklore with his stoppage-time winner to clinch the club's first Premier League title in his debut 2011/12 season..</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Neville"></div>
        <div className="summary">
          <div className="title">Gary Neville</div>
          <div className="description"><p><b>The one-club man who embodied dedication and drive.</b></p>
          <p>Right-back Neville renowned for his consistency, leadership, drive and tactical intelligence - represented Manchester United across 19 remarkable seasons, including the historic 1998/99 Treble-winning campaign</p>
            <p>Made 400 PL appearances, keeping more than 100 clean sheets, scoring 5 goals and 35 assists.</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Shearer"></div>
        <div className="summary">
          <div className="title">Alan Shearer</div>
          <div className="description"><p><b>The ultimate forward - and all-time record holder</b></p>
          <p>If there was a ball and there was a goal, nothing could stop Alan Shearer.</p>
          <p>That was why he scored a record 260 goals in the Premier League.</p>
          <p>Some are scorers of great goals, some great scorers of goals. Shearer was both. He was the ultimate centre-forward, scoring from all angles, with his left foot, with his right foot and with his head and scoring with pace, power and technique.</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Gerrard"></div>
        <div className="summary">
          <div className="title">Steven Gerrard</div>
          <div className="description"><p><b>The local lad who conquered the world.</b></p>
          <p>After coming through Liverpool's Academy, Steven Gerrard spent 17 years as the driving force of the Merseysiders' midfield in the Premier League.</p>
          <p>Famed for his driving runs, his ability to inspire team-mates and his spectacular strikes from distance</p>
          <p>Gerrard scored 120 goals from midfield, only behind Frank Lampard.</p>
          <p>The Reds's long-serving captain also provided 92 top-flight assists and won six monthly awards in his stellar career.</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Lampard"></div>
        <div className="summary">
          <div className="title">Frank Lampard</div>
          <div className="description"><p><b>The complete midfielder, whose records remain unmatched</b></p>
          <p>Over the course of 21 seasons in the Premier League, Frank Lampard was one of the competition's most complete midfielders.</p>
          <p>A champion on three occasions at Chelsea, no midfielder has ever got near to his 177 goals for the Blues, West Ham and Man City.</p> 
          <p>No player has matched his getting double figures for goals in 10 consecutive seasons as he became Chelsea's all-time leading scorer.</p>
          <p>Named Player of the Season for 2004/05, he also surpassed a century of assists in the Premier League.</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Drogba"></div>
        <div className="summary">
          <div className="title">Didier Drogba</div>
          <div className="description">
            <p>Blessed with <b>pace, power and skill</b>, Didier Drogba scored 104 Premier League goals, which is the msot by an African,  many struck spectacularly from distance or powered in with his head.</p>
            <p>The Ivorian won the Premier League trophy four times with  Chelsea, where he claimed two Golden Boots.</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Kompany"></div>
        <div className="summary">
          <div className="title">Vincent Kompany</div>
          <div className="description">
            <p>Man City's <b>Captain Fantastic</b>.</p>
            <p>Kompany won the Premier League trophy four times in his eleven years spell at Manchester City.</p>
            <p>The Belgian made 265 PL appearances, keeping 94 clean sheets in total.</p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <div className="Wright"></div>
        <div className="summary">
          <div className="title">Ian Wright</div>
          <div className="description">
            <p>From late starter to <b>record breaker</b>.</p>
            <p>One of the <b>greatest goalscorers</b> that Premier League has ever seen.</p>
            <p>Give him half a chance and he'll say thanks a lot.</p>
            <p>After joining Arsenal from Crystal Palace, Wright was the Arsenal's leading scorer in the club's first five seasons in the Premier League.</p>
            <p>Had the knack of being in the right place at the right time.</p> 
            <p>Wright was crucial in helping Arsenal to the 1997/98 title, where he also beat Cliff Bastin's club record of 178 goals.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hall_of_Fame;
