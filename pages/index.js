import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className={styles.main}>
     
        <h1 className={styles.title}>
           <a href="https://nextjs.org">2 Corinthians</a>
        </h1>
        <div className={styles.hero}>
       <Image 
                                src="/2corinthians.jfif"
                                alt="Jesus teaching"
                                height={900}
                                width={2000}
                                priority
                              />
                          
       <a href="https://the-holy-bible.vercel.app/">
            <button className={styles.button}>HOME</button>
       </a>
         <a href="https://the-holy-bible.vercel.app/">
            <button className={styles.button}>BOOKMARK</button>
       </a>           

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Chapter 1 &darr;</h2>
            <p>1 Paul, an apostle of Christ Jesus by the will of God, and Timothy our brother,

To the church of God in Corinth, together with all his holy people throughout Achaia:

2 Grace and peace to you from God our Father and the Lord Jesus Christ.

Praise to the God of All Comfort
3 Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, 4 who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God. 5 For just as we share abundantly in the sufferings of Christ, so also our comfort abounds through Christ. 6 If we are distressed, it is for your comfort and salvation; if we are comforted, it is for your comfort, which produces in you patient endurance of the same sufferings we suffer. 7 And our hope for you is firm, because we know that just as you share in our sufferings, so also you share in our comfort.

8 We do not want you to be uninformed, brothers and sisters,[a] about the troubles we experienced in the province of Asia. We were under great pressure, far beyond our ability to endure, so that we despaired of life itself. 9 Indeed, we felt we had received the sentence of death. But this happened that we might not rely on ourselves but on God, who raises the dead. 10 He has delivered us from such a deadly peril, and he will deliver us again. On him we have set our hope that he will continue to deliver us, 11 as you help us by your prayers. Then many will give thanks on our behalf for the gracious favor granted us in answer to the prayers of many.

Paul’s Change of Plans
12 Now this is our boast: Our conscience testifies that we have conducted ourselves in the world, and especially in our relations with you, with integrity[b] and godly sincerity. We have done so, relying not on worldly wisdom but on God’s grace. 13 For we do not write you anything you cannot read or understand. And I hope that, 14 as you have understood us in part, you will come to understand fully that you can boast of us just as we will boast of you in the day of the Lord Jesus.

15 Because I was confident of this, I wanted to visit you first so that you might benefit twice. 16 I wanted to visit you on my way to Macedonia and to come back to you from Macedonia, and then to have you send me on my way to Judea. 17 Was I fickle when I intended to do this? Or do I make my plans in a worldly manner so that in the same breath I say both “Yes, yes” and “No, no”?

18 But as surely as God is faithful, our message to you is not “Yes” and “No.” 19 For the Son of God, Jesus Christ, who was preached among you by us—by me and Silas[c] and Timothy—was not “Yes” and “No,” but in him it has always been “Yes.” 20 For no matter how many promises God has made, they are “Yes” in Christ. And so through him the “Amen” is spoken by us to the glory of God. 21 Now it is God who makes both us and you stand firm in Christ. He anointed us, 22 set his seal of ownership on us, and put his Spirit in our hearts as a deposit, guaranteeing what is to come.

23 I call God as my witness—and I stake my life on it—that it was in order to spare you that I did not return to Corinth. 24 Not that we lord it over your faith, but we work with you for your joy, because it is by faith you stand firm.</p>
          </div>

          <div className={styles.card}>
            <h2>Chapter 2 &darr;</h2>
            <p>2 1 So I made up my mind that I would not make another painful visit to you. 2 For if I grieve you, who is left to make me glad but you whom I have grieved? 3 I wrote as I did, so that when I came I would not be distressed by those who should have made me rejoice. I had confidence in all of you, that you would all share my joy. 4 For I wrote you out of great distress and anguish of heart and with many tears, not to grieve you but to let you know the depth of my love for you.

Forgiveness for the Offender
5 If anyone has caused grief, he has not so much grieved me as he has grieved all of you to some extent—not to put it too severely. 6 The punishment inflicted on him by the majority is sufficient. 7 Now instead, you ought to forgive and comfort him, so that he will not be overwhelmed by excessive sorrow. 8 I urge you, therefore, to reaffirm your love for him. 9 Another reason I wrote you was to see if you would stand the test and be obedient in everything. 10 Anyone you forgive, I also forgive. And what I have forgiven—if there was anything to forgive—I have forgiven in the sight of Christ for your sake, 11 in order that Satan might not outwit us. For we are not unaware of his schemes.

Ministers of the New Covenant
12 Now when I went to Troas to preach the gospel of Christ and found that the Lord had opened a door for me, 13 I still had no peace of mind, because I did not find my brother Titus there. So I said goodbye to them and went on to Macedonia.

14 But thanks be to God, who always leads us as captives in Christ’s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere. 15 For we are to God the pleasing aroma of Christ among those who are being saved and those who are perishing. 16 To the one we are an aroma that brings death; to the other, an aroma that brings life. And who is equal to such a task? 17 Unlike so many, we do not peddle the word of God for profit. On the contrary, in Christ we speak before God with sincerity, as those sent from God.</p>
          </div>

          <div className={styles.card}
          >
            <h2>Chapter 3 &darr;</h2>
            <p>3 Are we beginning to commend ourselves again? Or do we need, like some people, letters of recommendation to you or from you? 2 You yourselves are our letter, written on our hearts, known and read by everyone. 3 You show that you are a letter from Christ, the result of our ministry, written not with ink but with the Spirit of the living God, not on tablets of stone but on tablets of human hearts.

4 Such confidence we have through Christ before God. 5 Not that we are competent in ourselves to claim anything for ourselves, but our competence comes from God. 6 He has made us competent as ministers of a new covenant—not of the letter but of the Spirit; for the letter kills, but the Spirit gives life.

The Greater Glory of the New Covenant
7 Now if the ministry that brought death, which was engraved in letters on stone, came with glory, so that the Israelites could not look steadily at the face of Moses because of its glory, transitory though it was, 8 will not the ministry of the Spirit be even more glorious? 9 If the ministry that brought condemnation was glorious, how much more glorious is the ministry that brings righteousness! 10 For what was glorious has no glory now in comparison with the surpassing glory. 11 And if what was transitory came with glory, how much greater is the glory of that which lasts!

12 Therefore, since we have such a hope, we are very bold. 13 We are not like Moses, who would put a veil over his face to prevent the Israelites from seeing the end of what was passing away. 14 But their minds were made dull, for to this day the same veil remains when the old covenant is read. It has not been removed, because only in Christ is it taken away. 15 Even to this day when Moses is read, a veil covers their hearts. 16 But whenever anyone turns to the Lord, the veil is taken away. 17 Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom. 18 And we all, who with unveiled faces contemplate[a] the Lord’s glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.</p>
          </div>

          <div className={styles.card}
          >
            <h2>Chapter 4 &darr;</h2>
            <p>
            Present Weakness and Resurrection Life
4 Therefore, since through God’s mercy we have this ministry, we do not lose heart. 2 Rather, we have renounced secret and shameful ways; we do not use deception, nor do we distort the word of God. On the contrary, by setting forth the truth plainly we commend ourselves to everyone’s conscience in the sight of God. 3 And even if our gospel is veiled, it is veiled to those who are perishing. 4 The god of this age has blinded the minds of unbelievers, so that they cannot see the light of the gospel that displays the glory of Christ, who is the image of God. 5 For what we preach is not ourselves, but Jesus Christ as Lord, and ourselves as your servants for Jesus’ sake. 6 For God, who said, “Let light shine out of darkness,”[a] made his light shine in our hearts to give us the light of the knowledge of God’s glory displayed in the face of Christ.

7 But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. 8 We are hard pressed on every side, but not crushed; perplexed, but not in despair; 9 persecuted, but not abandoned; struck down, but not destroyed. 10 We always carry around in our body the death of Jesus, so that the life of Jesus may also be revealed in our body. 11 For we who are alive are always being given over to death for Jesus’ sake, so that his life may also be revealed in our mortal body. 12 So then, death is at work in us, but life is at work in you.

13 It is written: “I believed; therefore I have spoken.”[b] Since we have that same spirit of[c] faith, we also believe and therefore speak, 14 because we know that the one who raised the Lord Jesus from the dead will also raise us with Jesus and present us with you to himself. 15 All this is for your benefit, so that the grace that is reaching more and more people may cause thanksgiving to overflow to the glory of God.

16 Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. 17 For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. 18 So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.
            </p>
          </div>
          <div className={styles.card}
          >
            <h2>Chapter 5 &darr;</h2>
            <p>
            Awaiting the New Body
5 For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands. 2 Meanwhile we groan, longing to be clothed instead with our heavenly dwelling, 3 because when we are clothed, we will not be found naked. 4 For while we are in this tent, we groan and are burdened, because we do not wish to be unclothed but to be clothed instead with our heavenly dwelling, so that what is mortal may be swallowed up by life. 5 Now the one who has fashioned us for this very purpose is God, who has given us the Spirit as a deposit, guaranteeing what is to come.

6 Therefore we are always confident and know that as long as we are at home in the body we are away from the Lord. 7 For we live by faith, not by sight. 8 We are confident, I say, and would prefer to be away from the body and at home with the Lord. 9 So we make it our goal to please him, whether we are at home in the body or away from it. 10 For we must all appear before the judgment seat of Christ, so that each of us may receive what is due us for the things done while in the body, whether good or bad.

The Ministry of Reconciliation
11 Since, then, we know what it is to fear the Lord, we try to persuade others. What we are is plain to God, and I hope it is also plain to your conscience. 12 We are not trying to commend ourselves to you again, but are giving you an opportunity to take pride in us, so that you can answer those who take pride in what is seen rather than in what is in the heart. 13 If we are “out of our mind,” as some say, it is for God; if we are in our right mind, it is for you. 14 For Christ’s love compels us, because we are convinced that one died for all, and therefore all died. 15 And he died for all, that those who live should no longer live for themselves but for him who died for them and was raised again.

16 So from now on we regard no one from a worldly point of view. Though we once regarded Christ in this way, we do so no longer. 17 Therefore, if anyone is in Christ, the new creation has come:[a] The old has gone, the new is here! 18 All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: 19 that God was reconciling the world to himself in Christ, not counting people’s sins against them. And he has committed to us the message of reconciliation. 20 We are therefore Christ’s ambassadors, as though God were making his appeal through us. We implore you on Christ’s behalf: Be reconciled to God. 21 God made him who had no sin to be sin[b] for us, so that in him we might become the righteousness of God.



            </p>
        </div>
        <div className={styles.card}
          >
            <h2>Chapter 6 &darr;</h2>
            <p>

            Awaiting the New Body
5 For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands. 2 Meanwhile we groan, longing to be clothed instead with our heavenly dwelling, 3 because when we are clothed, we will not be found naked. 4 For while we are in this tent, we groan and are burdened, because we do not wish to be unclothed but to be clothed instead with our heavenly dwelling, so that what is mortal may be swallowed up by life. 5 Now the one who has fashioned us for this very purpose is God, who has given us the Spirit as a deposit, guaranteeing what is to come.

6 Therefore we are always confident and know that as long as we are at home in the body we are away from the Lord. 7 For we live by faith, not by sight. 8 We are confident, I say, and would prefer to be away from the body and at home with the Lord. 9 So we make it our goal to please him, whether we are at home in the body or away from it. 10 For we must all appear before the judgment seat of Christ, so that each of us may receive what is due us for the things done while in the body, whether good or bad.

The Ministry of Reconciliation
11 Since, then, we know what it is to fear the Lord, we try to persuade others. What we are is plain to God, and I hope it is also plain to your conscience. 12 We are not trying to commend ourselves to you again, but are giving you an opportunity to take pride in us, so that you can answer those who take pride in what is seen rather than in what is in the heart. 13 If we are “out of our mind,” as some say, it is for God; if we are in our right mind, it is for you. 14 For Christ’s love compels us, because we are convinced that one died for all, and therefore all died. 15 And he died for all, that those who live should no longer live for themselves but for him who died for them and was raised again.

16 So from now on we regard no one from a worldly point of view. Though we once regarded Christ in this way, we do so no longer. 17 Therefore, if anyone is in Christ, the new creation has come:[a] The old has gone, the new is here! 18 All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: 19 that God was reconciling the world to himself in Christ, not counting people’s sins against them. And he has committed to us the message of reconciliation. 20 We are therefore Christ’s ambassadors, as though God were making his appeal through us. We implore you on Christ’s behalf: Be reconciled to God. 21 God made him who had no sin to be sin[b] for us, so that in him we might become the righteousness of God.


            </p>
        </div>
        <div className={styles.card}
          >
            <h2>Chapter 7 &darr;</h2>
            <p>

            Awaiting the New Body
5 For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands. 2 Meanwhile we groan, longing to be clothed instead with our heavenly dwelling, 3 because when we are clothed, we will not be found naked. 4 For while we are in this tent, we groan and are burdened, because we do not wish to be unclothed but to be clothed instead with our heavenly dwelling, so that what is mortal may be swallowed up by life. 5 Now the one who has fashioned us for this very purpose is God, who has given us the Spirit as a deposit, guaranteeing what is to come.

6 Therefore we are always confident and know that as long as we are at home in the body we are away from the Lord. 7 For we live by faith, not by sight. 8 We are confident, I say, and would prefer to be away from the body and at home with the Lord. 9 So we make it our goal to please him, whether we are at home in the body or away from it. 10 For we must all appear before the judgment seat of Christ, so that each of us may receive what is due us for the things done while in the body, whether good or bad.

The Ministry of Reconciliation
11 Since, then, we know what it is to fear the Lord, we try to persuade others. What we are is plain to God, and I hope it is also plain to your conscience. 12 We are not trying to commend ourselves to you again, but are giving you an opportunity to take pride in us, so that you can answer those who take pride in what is seen rather than in what is in the heart. 13 If we are “out of our mind,” as some say, it is for God; if we are in our right mind, it is for you. 14 For Christ’s love compels us, because we are convinced that one died for all, and therefore all died. 15 And he died for all, that those who live should no longer live for themselves but for him who died for them and was raised again.

16 So from now on we regard no one from a worldly point of view. Though we once regarded Christ in this way, we do so no longer. 17 Therefore, if anyone is in Christ, the new creation has come:[a] The old has gone, the new is here! 18 All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: 19 that God was reconciling the world to himself in Christ, not counting people’s sins against them. And he has committed to us the message of reconciliation. 20 We are therefore Christ’s ambassadors, as though God were making his appeal through us. We implore you on Christ’s behalf: Be reconciled to God. 21 God made him who had no sin to be sin[b] for us, so that in him we might become the righteousness of God.


            </p>
        </div>
        <div className={styles.card}
          >
            <h2>Chapter 8 &darr;</h2>
            <p>
            The Collection for the Lord’s People
8 And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches. 2 In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity. 3 For I testify that they gave as much as they were able, and even beyond their ability. Entirely on their own, 4 they urgently pleaded with us for the privilege of sharing in this service to the Lord’s people. 5 And they exceeded our expectations: They gave themselves first of all to the Lord, and then by the will of God also to us. 6 So we urged Titus, just as he had earlier made a beginning, to bring also to completion this act of grace on your part. 7 But since you excel in everything—in faith, in speech, in knowledge, in complete earnestness and in the love we have kindled in you[a]—see that you also excel in this grace of giving.

8 I am not commanding you, but I want to test the sincerity of your love by comparing it with the earnestness of others. 9 For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich.

10 And here is my judgment about what is best for you in this matter. Last year you were the first not only to give but also to have the desire to do so. 11 Now finish the work, so that your eager willingness to do it may be matched by your completion of it, according to your means. 12 For if the willingness is there, the gift is acceptable according to what one has, not according to what one does not have.

13 Our desire is not that others might be relieved while you are hard pressed, but that there might be equality. 14 At the present time your plenty will supply what they need, so that in turn their plenty will supply what you need. The goal is equality, 15 as it is written: “The one who gathered much did not have too much, and the one who gathered little did not have too little.”[b]

Titus Sent to Receive the Collection
16 Thanks be to God, who put into the heart of Titus the same concern I have for you. 17 For Titus not only welcomed our appeal, but he is coming to you with much enthusiasm and on his own initiative. 18 And we are sending along with him the brother who is praised by all the churches for his service to the gospel. 19 What is more, he was chosen by the churches to accompany us as we carry the offering, which we administer in order to honor the Lord himself and to show our eagerness to help. 20 We want to avoid any criticism of the way we administer this liberal gift. 21 For we are taking pains to do what is right, not only in the eyes of the Lord but also in the eyes of man.

22 In addition, we are sending with them our brother who has often proved to us in many ways that he is zealous, and now even more so because of his great confidence in you. 23 As for Titus, he is my partner and co-worker among you; as for our brothers, they are representatives of the churches and an honor to Christ. 24 Therefore show these men the proof of your love and the reason for our pride in you, so that the churches can see it.
              
            </p>
        </div>
        <div className={styles.card}
          >
            <h2>Chapter 9 &darr;</h2>
            <p>

            The Collection for the Lord’s People
8 And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches. 2 In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity. 3 For I testify that they gave as much as they were able, and even beyond their ability. Entirely on their own, 4 they urgently pleaded with us for the privilege of sharing in this service to the Lord’s people. 5 And they exceeded our expectations: They gave themselves first of all to the Lord, and then by the will of God also to us. 6 So we urged Titus, just as he had earlier made a beginning, to bring also to completion this act of grace on your part. 7 But since you excel in everything—in faith, in speech, in knowledge, in complete earnestness and in the love we have kindled in you[a]—see that you also excel in this grace of giving.

8 I am not commanding you, but I want to test the sincerity of your love by comparing it with the earnestness of others. 9 For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich.

10 And here is my judgment about what is best for you in this matter. Last year you were the first not only to give but also to have the desire to do so. 11 Now finish the work, so that your eager willingness to do it may be matched by your completion of it, according to your means. 12 For if the willingness is there, the gift is acceptable according to what one has, not according to what one does not have.

13 Our desire is not that others might be relieved while you are hard pressed, but that there might be equality. 14 At the present time your plenty will supply what they need, so that in turn their plenty will supply what you need. The goal is equality, 15 as it is written: “The one who gathered much did not have too much, and the one who gathered little did not have too little.”[b]

Titus Sent to Receive the Collection
16 Thanks be to God, who put into the heart of Titus the same concern I have for you. 17 For Titus not only welcomed our appeal, but he is coming to you with much enthusiasm and on his own initiative. 18 And we are sending along with him the brother who is praised by all the churches for his service to the gospel. 19 What is more, he was chosen by the churches to accompany us as we carry the offering, which we administer in order to honor the Lord himself and to show our eagerness to help. 20 We want to avoid any criticism of the way we administer this liberal gift. 21 For we are taking pains to do what is right, not only in the eyes of the Lord but also in the eyes of man.

22 In addition, we are sending with them our brother who has often proved to us in many ways that he is zealous, and now even more so because of his great confidence in you. 23 As for Titus, he is my partner and co-worker among you; as for our brothers, they are representatives of the churches and an honor to Christ. 24 Therefore show these men the proof of your love and the reason for our pride in you, so that the churches can see it.
            </p>
        </div>
        <div className={styles.card}
          >
            <h2>Chapter 10 &darr;</h2>
            <p>

            The Collection for the Lord’s People
8 And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches. 2 In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity. 3 For I testify that they gave as much as they were able, and even beyond their ability. Entirely on their own, 4 they urgently pleaded with us for the privilege of sharing in this service to the Lord’s people. 5 And they exceeded our expectations: They gave themselves first of all to the Lord, and then by the will of God also to us. 6 So we urged Titus, just as he had earlier made a beginning, to bring also to completion this act of grace on your part. 7 But since you excel in everything—in faith, in speech, in knowledge, in complete earnestness and in the love we have kindled in you[a]—see that you also excel in this grace of giving.

8 I am not commanding you, but I want to test the sincerity of your love by comparing it with the earnestness of others. 9 For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich.

10 And here is my judgment about what is best for you in this matter. Last year you were the first not only to give but also to have the desire to do so. 11 Now finish the work, so that your eager willingness to do it may be matched by your completion of it, according to your means. 12 For if the willingness is there, the gift is acceptable according to what one has, not according to what one does not have.

13 Our desire is not that others might be relieved while you are hard pressed, but that there might be equality. 14 At the present time your plenty will supply what they need, so that in turn their plenty will supply what you need. The goal is equality, 15 as it is written: “The one who gathered much did not have too much, and the one who gathered little did not have too little.”[b]

Titus Sent to Receive the Collection
16 Thanks be to God, who put into the heart of Titus the same concern I have for you. 17 For Titus not only welcomed our appeal, but he is coming to you with much enthusiasm and on his own initiative. 18 And we are sending along with him the brother who is praised by all the churches for his service to the gospel. 19 What is more, he was chosen by the churches to accompany us as we carry the offering, which we administer in order to honor the Lord himself and to show our eagerness to help. 20 We want to avoid any criticism of the way we administer this liberal gift. 21 For we are taking pains to do what is right, not only in the eyes of the Lord but also in the eyes of man.

22 In addition, we are sending with them our brother who has often proved to us in many ways that he is zealous, and now even more so because of his great confidence in you. 23 As for Titus, he is my partner and co-worker among you; as for our brothers, they are representatives of the churches and an honor to Christ. 24 Therefore show these men the proof of your love and the reason for our pride in you, so that the churches can see it.
            </p>
        </div>

        <div className={styles.card}
          >
            <h2>Chapter 11 &darr;</h2>
            <p>
            The Collection for the Lord’s People
8 And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches. 2 In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity. 3 For I testify that they gave as much as they were able, and even beyond their ability. Entirely on their own, 4 they urgently pleaded with us for the privilege of sharing in this service to the Lord’s people. 5 And they exceeded our expectations: They gave themselves first of all to the Lord, and then by the will of God also to us. 6 So we urged Titus, just as he had earlier made a beginning, to bring also to completion this act of grace on your part. 7 But since you excel in everything—in faith, in speech, in knowledge, in complete earnestness and in the love we have kindled in you[a]—see that you also excel in this grace of giving.

8 I am not commanding you, but I want to test the sincerity of your love by comparing it with the earnestness of others. 9 For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich.

10 And here is my judgment about what is best for you in this matter. Last year you were the first not only to give but also to have the desire to do so. 11 Now finish the work, so that your eager willingness to do it may be matched by your completion of it, according to your means. 12 For if the willingness is there, the gift is acceptable according to what one has, not according to what one does not have.

13 Our desire is not that others might be relieved while you are hard pressed, but that there might be equality. 14 At the present time your plenty will supply what they need, so that in turn their plenty will supply what you need. The goal is equality, 15 as it is written: “The one who gathered much did not have too much, and the one who gathered little did not have too little.”[b]

Titus Sent to Receive the Collection
16 Thanks be to God, who put into the heart of Titus the same concern I have for you. 17 For Titus not only welcomed our appeal, but he is coming to you with much enthusiasm and on his own initiative. 18 And we are sending along with him the brother who is praised by all the churches for his service to the gospel. 19 What is more, he was chosen by the churches to accompany us as we carry the offering, which we administer in order to honor the Lord himself and to show our eagerness to help. 20 We want to avoid any criticism of the way we administer this liberal gift. 21 For we are taking pains to do what is right, not only in the eyes of the Lord but also in the eyes of man.

22 In addition, we are sending with them our brother who has often proved to us in many ways that he is zealous, and now even more so because of his great confidence in you. 23 As for Titus, he is my partner and co-worker among you; as for our brothers, they are representatives of the churches and an honor to Christ. 24 Therefore show these men the proof of your love and the reason for our pride in you, so that the churches can see it.
              
            </p>
        </div>
        <div className={styles.card}
          >
            <h2>Chapter 12 &darr;</h2>
            <p>
            The Collection for the Lord’s People
8 And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches. 2 In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity. 3 For I testify that they gave as much as they were able, and even beyond their ability. Entirely on their own, 4 they urgently pleaded with us for the privilege of sharing in this service to the Lord’s people. 5 And they exceeded our expectations: They gave themselves first of all to the Lord, and then by the will of God also to us. 6 So we urged Titus, just as he had earlier made a beginning, to bring also to completion this act of grace on your part. 7 But since you excel in everything—in faith, in speech, in knowledge, in complete earnestness and in the love we have kindled in you[a]—see that you also excel in this grace of giving.

8 I am not commanding you, but I want to test the sincerity of your love by comparing it with the earnestness of others. 9 For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich.

10 And here is my judgment about what is best for you in this matter. Last year you were the first not only to give but also to have the desire to do so. 11 Now finish the work, so that your eager willingness to do it may be matched by your completion of it, according to your means. 12 For if the willingness is there, the gift is acceptable according to what one has, not according to what one does not have.

13 Our desire is not that others might be relieved while you are hard pressed, but that there might be equality. 14 At the present time your plenty will supply what they need, so that in turn their plenty will supply what you need. The goal is equality, 15 as it is written: “The one who gathered much did not have too much, and the one who gathered little did not have too little.”[b]

Titus Sent to Receive the Collection
16 Thanks be to God, who put into the heart of Titus the same concern I have for you. 17 For Titus not only welcomed our appeal, but he is coming to you with much enthusiasm and on his own initiative. 18 And we are sending along with him the brother who is praised by all the churches for his service to the gospel. 19 What is more, he was chosen by the churches to accompany us as we carry the offering, which we administer in order to honor the Lord himself and to show our eagerness to help. 20 We want to avoid any criticism of the way we administer this liberal gift. 21 For we are taking pains to do what is right, not only in the eyes of the Lord but also in the eyes of man.

22 In addition, we are sending with them our brother who has often proved to us in many ways that he is zealous, and now even more so because of his great confidence in you. 23 As for Titus, he is my partner and co-worker among you; as for our brothers, they are representatives of the churches and an honor to Christ. 24 Therefore show these men the proof of your love and the reason for our pride in you, so that the churches can see it.
              
            </p>
        </div>
        <div className={styles.card}
          >
            <h2>Chapter 13 &darr;</h2>
            <p>

            Final Warnings
13 This will be my third visit to you. “Every matter must be established by the testimony of two or three witnesses.”[a] 2 I already gave you a warning when I was with you the second time. I now repeat it while absent: On my return I will not spare those who sinned earlier or any of the others, 3 since you are demanding proof that Christ is speaking through me. He is not weak in dealing with you, but is powerful among you. 4 For to be sure, he was crucified in weakness, yet he lives by God’s power. Likewise, we are weak in him, yet by God’s power we will live with him in our dealing with you.

5 Examine yourselves to see whether you are in the faith; test yourselves. Do you not realize that Christ Jesus is in you—unless, of course, you fail the test? 6 And I trust that you will discover that we have not failed the test. 7 Now we pray to God that you will not do anything wrong—not so that people will see that we have stood the test but so that you will do what is right even though we may seem to have failed. 8 For we cannot do anything against the truth, but only for the truth. 9 We are glad whenever we are weak but you are strong; and our prayer is that you may be fully restored. 10 This is why I write these things when I am absent, that when I come I may not have to be harsh in my use of authority—the authority the Lord gave me for building you up, not for tearing you down.

Final Greetings
11 Finally, brothers and sisters, rejoice! Strive for full restoration, encourage one another, be of one mind, live in peace. And the God of love and peace will be with you.

12 Greet one another with a holy kiss. 13 All God’s people here send their greetings.

14 May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.
            </p>
        </div>

       

        </div>
</div>
        <p className={styles.description}> 
        <code className={styles.publisher}>
        Coded, Published & Deployed by His servant: Jason Daniel Nutt 
        </code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
