---
layout: post
title: "[Edutech] Demo-Hi(gh)"
---

# Keywords
Game-based learning
Political education
Chatbot

## Overview
'Demo-hi(gh)' is an election simulation game, designed to provide fun and realistic political education for high school students. Each learner goes through five steps that follow the steps of the actual presidential election process. The town has virtual buildings, such as the Election Commission, the Digital Gallery, and the Park, and you enter each building to play the game. A chatbot guides you through the steps, each with a time limit. We've assumed that the class is accessing from their devices simultaneously and that people in the same class are part of the same town and can interact with each other.

# Prototype
## Key Function

**Making Policy with VOTY**

This is an activity in which a politician identifies a problem situation and creates his/her own policy by filling in the questions given in the game. In the virtual town in the game, it is assumed that there are scenarios where problem situations occur randomly.
Politicians can create policies by observing various problem situations or create and present policies based on their own values. In this process, VOTY, a rule-based chatbot, provides step-by-step scaffolding for more effective training.

{% include image.html image="proj-2/voti_1.png" %}
{% include image.html image="proj-2/voti_2.png" %}
{% include image.html image="proj-2/voti_3.png" %}


**When we can use VOTY?**
1. If the politician can't find a suitable problem situation or doesn't have one in mind
> 'Status and Problems' button to get hints about problems that exist in the town.

2. If they have found a suitable problem situation but are struggling to come up with a solution
> 'Solutions' button to get resources on solutions. 
The system searches for resources that tell you about the current status of the problem situation and existing policies related to the problem situation. 

3. If you want to get a rough idea of campaign ideas centered on the area you want to make a policy
> 'Recommended Campaign' button to get recommended policy ideas by field. 

4. If you want to analyze voters' opinions
> 'Data Analysis' button to get a response based on the text data on the board.


## Reflection

### Significance
- Utilizing the Design Thinking process (<a href="https://minjuu1.github.io/assets/img/proj-2/project-report.pdf" target="_blank">Report</a>)

This project aimed to apply technology to education following the design thinking process. Our goal was to create a class where students actively engage in the learning process, not the one-way education. With political education as our keyword, we interviewed four high school students. The interviews revealed that, contrary to the needs of students who must actually vote, the current education system only imparts theoretical knowledge, and students lose interest because they don't know how to participate in politics in a practical sense. After conducting research on election education, we planned an election simulation game that could be used as part of political education.


### Limitation
- Limited chatbot functions

The concept of rule-based chatbot was utilized by referring to the chatbots before LLM, so it was difficult to fully implement the envisioned idea.
If we apply the current LLM and prompt engineering, VOTY can provide rich functions in various aspects such as validating policy, setting policy evaluation criteria and executing evaluation accordingly, and discovering ideas.