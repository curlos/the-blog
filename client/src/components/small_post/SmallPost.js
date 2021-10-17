import React, { useState } from 'react'
import './SmallPost.css'

const SmallPost = () => {
  const [postObj, setPostObj] = useState({
    title: 'Kyrie Irving and his vaccine stance clarified: Why the Nets star has made a decision that will sideline him',
    author: 'Shams Charania',
    date: 'Oct 12, 2021',
    comments: 949,
    headerImage: 'https://cdn.theathletic.com/app/uploads/2021/10/12180304/GettyImages-1233293239-scaled.jpg',
    content: `<p><a class="ath_autolink" href="https://theathletic.com/player/nba/nets/kyrie-irving/" target="_blank" rel="noopener">Kyrie Irving</a>&nbsp;believes he is fighting for something bigger than basketball &mdash; and the unintended consequences are that his mission is conflicting with his career and his franchise, the&nbsp;<a class="ath_autolink" href="https://theathletic.com/team/nets/" target="_blank" rel="noopener">Brooklyn Nets</a>.</p>
    <p>Irving remains ineligible to play in&nbsp;<a class="ath_autolink" href="https://theathletic.com/nba/" target="_blank" rel="noopener">NBA</a>&nbsp;home games at Barclays Center in Brooklyn because he has not fulfilled New York City&rsquo;s COVID-19 vaccine requirement, and the Nets announced Tuesday&nbsp;<a href="https://theathletic.com/news/nets-say-kyrie-irving-wont-play-or-practice-until-he-can-be-full-participant/ZQmH5TVdCfd3" target="_blank" rel="noopener">that Irving will not play or practice with the team</a>&nbsp;until he is eligible to be a full participant.&nbsp;<em>The Athletic</em>&nbsp;has learned through multiple sources what has been behind his stance and decision to not take the vaccine, reasoning which has not been made public to date.</p>
    <p>Nets general manager Sean Marks acknowledged Tuesday that Irving is not vaccinated for COVID-19. The All-NBA star and the Nets had received some good news on Friday when&nbsp;<a href="https://theathletic.com/news/nets-kyrie-irving-can-participate-in-practices-in-brooklyn-per-city-official/oXhpnHQ5IDnA" target="_blank" rel="noopener">New York City Hall ruled that the team&rsquo;s practice facility, HSS Training Center, is a private office building</a>&nbsp;&mdash; clearing Irving to return to practice on Sunday. But as of now, Irving has no plans to be vaccinated, sources say. Within the franchise and the players in the locker room, it is understood that Irving&rsquo;s decision is what it is.</p>
    <p>All this has left the Nets to account for how to handle the unprecedented situation and led to a bevy of questions: Is Irving anti-vax and what is really behind his choice? Will City Hall change the vaccine mandate? How will the Nets handle having Irving banished from the team instead of in and out of the lineup and available for road games and home practices?</p>
    <p>Multiple sources with direct knowledge of Irving&rsquo;s decision have told&nbsp;<em>The Athletic</em>&nbsp;that Irving is not anti-vaccine and that his stance is that he is upset that people are losing their jobs due to vaccine mandates. It&rsquo;s a stance that Irving has explained to close teammates. To him, this is about a grander fight than the one on the court and Irving is challenging a perceived control of society and people&rsquo;s livelihood<strong>,&nbsp;</strong>according to sources with knowledge of Irving&rsquo;s mindset. It is a decision that he believes he is capable to make given his current life dynamics. &ldquo;Kyrie wants to be a voice for the voiceless,&rdquo; one source said.</p>
    <p>However, the nation&rsquo;s top doctors and scientists have cleared the vaccine as safe and effective. The&nbsp;<a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/facts.html" target="_blank" rel="noopener">Center for Disease Control</a>&nbsp;(CDC), American Medical Association (AMA) and Food and Drug Administration (FDA) state clearly that COVID-19 vaccines are effective at helping protect against severe disease and death, including from variants of the virus, while also being safe. In fact, multiple studies showed that 99 percent of people who are in intensive care units in hospitals are unvaccinated. Sources say 96 percent of NBA players are currently vaccinated. More than 3.75 billion people worldwide have received a vaccine dose.&nbsp;To be clear, Irving&rsquo;s stance is not believed to be anti-science, according to sources.</p>
    <p>Irving has made more than $160 million over his NBA contracts and has a massive Nike shoe endorsement deal, so those who know Irving understand he is not driven right now by money, nor cares for inheriting more, but rather the stand for larger issues in his mind that need his support. He&rsquo;s a seven-time All-Star, two-time All-NBA member and former Rookie of the Year who now stands to lose over $200 million by deciding to use his platform to stand up for his stance of each and every person being able to decide for themselves on whether they should take the vaccine without impacts on job statuses. However, the fact of the matter is there are consequences for being unvaccinated in some industries and municipalities. Just as Irving wants to stick with his principle belief on the matter, policies and requirements are subject to local and federal governments.</p>
    <p>&ldquo;I think we are looking at putting a group of people that are going to be able to participate fully and that is what this comes down to,&rdquo; Marks told reporters on Tuesday. &ldquo;We&rsquo;re not looking for partners that are going to be half time.&rdquo;</p>
    <p>Irving is slated to miss out on $16 million-plus in salary this season &mdash; half of his overall deal &mdash; and forgo a $186 million contract extension.</p>
    <p>For now, there are no signs that the New York City policy on the vaccine will change. One City Hall official told&nbsp;<em>The Athletic&nbsp;</em>on Tuesday that there is no expectation of removing the current rules. So the rules are indefinite and the Nets are preparing as if the policy will cover the entire 2021-22 season.</p>
    <p>&ldquo;Kyrie has made a personal choice, and we respect his individual right to choose,&rdquo; Marks said in a statement Tuesday. &ldquo;Currently the choice restricts his ability to be a full-time member of the team, and we will not permit any member of our team to participate with part-time availability. It is imperative that we continue to build chemistry as a team and remain true to our long-established values of togetherness and sacrifice. Our championship goals for the season have not changed, and to achieve these goals each member of our organization must pull in the same direction. We are excited for the start of the season and look forward to a successful campaign that will make the borough of Brooklyn proud.&rdquo;</p>
    <p>The Nets have preached &ldquo;sacrifice&rdquo; across the roster this season as the franchise pursues a title run, and that has extended off the court with the vaccine. Both&nbsp;<a class="ath_autolink" href="https://theathletic.com/player/nba/nets/kevin-durant/" target="_blank" rel="noopener">Kevin Durant</a>&nbsp;and&nbsp;<a class="ath_autolink" href="https://theathletic.com/player/nba/nets/james-harden/" target="_blank" rel="noopener">James Harden</a>&nbsp;received the first vaccine shot in the lead up to training camp, understanding the New York City requirements, and expected Irving to do the same. Ultimately, the Nets did not want to deal with the distraction of Irving being a part-time player and wanted him to fully commit to the team &mdash; or stay away. The organization made the decision also based on the fact that Irving is the only member of their Tier 1 personnel (players, coaches, top front office officials) not to be vaccinated, thus prioritizing safety of a fully-vaccinated group.</p>
    <p>Marks said on Tuesday that he and team owner Joe Tsai were the ones who made the decision to sit Irving until he fulfills the city&rsquo;s vaccine requirements to be a full-time player. Tsai expressed last month the importance of vaccinations in a&nbsp;<a href="https://theathletic.com/2860539/2021/10/01/nets-qa-with-owner-joe-tsai-on-kevin-durants-extension-investing-with-steve-nash-and-more/" target="_blank" rel="noopener">sit-down with&nbsp;<em>The Athletic</em>&rsquo;s Alex Schiffer</a>.</p>
    <p>Rival teams believe the Nets would be open to a significant trade offer for Irving, but his openness to playing for other franchises is unclear. Irving will be fully eligible in all markets except New York City and San Francisco. Brooklyn is on a championship chase, wanting the commitment of every player on its roster, now dealing with the cloud of uncertainty regarding a member of its big three.</p>
    <p><em>&nbsp;(Photo: Nathaniel S. Butler/NBAE via Getty Images)</em></p>`
  })

  return (
    <div className="smallPostContainer">
      <div className="imageContainer">
        <img src={postObj.headerImage} alt={postObj.title} />
      </div>

      <div className="smallPostInfo">
        <div>
          <div>{postObj.title}</div>
        </div>

        <div>
          <span>{postObj.author}</span>
          <span>{postObj.comments}</span>
        </div>
      </div>
    </div>
  )
}

export default SmallPost;