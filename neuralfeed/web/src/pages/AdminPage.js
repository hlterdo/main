import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import db, { auth } from "../Firebase";
import { useStateValue } from "../StateProvider";
import Login from "../components/Login";

const AdminPage = () => {
  const [{ user }] = useStateValue();

  const [author, setAuthor] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [body, setBody] = useState("");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [bulletPoint0, setBulletPoint0] = useState("");
  const [bulletPoint1, setBulletPoint1] = useState("");
  const [bulletPoint2, setBulletPoint2] = useState("");
  const [bulletPoint3, setBulletPoint3] = useState("");

  const [tag0Name, setTag0Name] = useState("");
  const [tag0Color, setTag0Color] = useState("");
  const [tag1Name, setTag1Name] = useState("");
  const [tag1Color, setTag1Color] = useState("");

  const handleSubmit = (e) => {
    async function addPost() {
      e.preventDefault();
      console.log("author: ", author);
      console.log("imageURL: ", imageURL);
      console.log("link: ", link);
      console.log("type: ", type);
      console.log("body: ", body);
      console.log("youtubeVideoId: ", youtubeVideoId);

      if (!user) {
        return;
      }

      let authorEmail = "";
      let authorPhotoURL = "";
      let authorType = "";
      let authorName = "";

      if (author === "halit") {
        authorEmail = "haliterdogan@gmail.com";
        authorName = "Halit Erdogan";
        authorPhotoURL =
          "https://lh3.googleusercontent.com/ogw/AAEL6sjzqBW49GGP2LpR2Bazxm6YricL9RUP_zHg8NtJ=s32-c-mo";
        authorType = "teamMember";
      }

      if (author === "burke") {
        authorEmail = "burke.atilla@gmail.com";
        authorName = "Burke Atilla";
        authorPhotoURL =
          "https://lh3.googleusercontent.com/a-/ALV-UjUAR8dgepomMHaqvS_EauFkXzMI5R9wdUVnwYjrQQCqdG8I=s64-p-k-rw-no";
        authorType = "teamMember";
      }

      if (author === "burak") {
        authorEmail = "burakarik@gmail.com";
        authorName = "Burak Arik";
        authorPhotoURL =
          "https://lh3.googleusercontent.com/a-/ALV-UjUAjeSXHUQ98RAH41AGkOvTSEVf9sFpI-RZIOFQ2jxeawej=s64-p-k-rw-no";
        authorType = "teamMember";
      }

      if (author === "eren") {
        authorEmail = "eren@entrapeer.com";
        authorName = "Eren Hukumdar";
        authorPhotoURL =
          "https://firebasestorage.googleapis.com/v0/b/neuralfeed-748c8.appspot.com/o/eren.png?alt=media&token=57798b6e-0fd9-4af6-87fa-d72a7f4465dc";
        authorType = "teamMember";
      }

      if (author === "github") {
        authorEmail = "botgithubscout@neuralfeed.ai";
        authorName = "Github Scout";
        authorType = "botGithubScout";
      }

      if (author === "startup") {
        authorEmail = "botstartupscout@neuralfeed.ai";
        authorName = "Startup Scout";
        authorType = "botStartupScout";
      }

      if (author === "news") {
        authorEmail = "botnewsreporter@neuralfeed.ai";
        authorName = "News Reporter";
        authorType = "botNewsReporter";
      }

      if (author === "academic") {
        authorEmail = "botacademicexpert@neuralfeed.ai";
        authorName = "Academic Expert";
        authorType = "botAcademicExpert";
      }

      if (author === "event") {
        authorEmail = "botsocialbutterfly@neuralfeed.ai";
        authorName = "Event Hunter";
        authorType = "botSocialButterfly";
      }

      const projectId = "krxaZpoAgVHwOnSxHWKa";

      let bulletPoints = [];

      if (bulletPoint0) {
        bulletPoints.push(bulletPoint0);
      }

      if (bulletPoint1) {
        bulletPoints.push(bulletPoint1);
      }
      if (bulletPoint2) {
        bulletPoints.push(bulletPoint2);
      }
      if (bulletPoint3) {
        bulletPoints.push(bulletPoint3);
      }

      let tags = [];

      if (tag0Name && tag0Color) {
        tags.push({ name: tag0Name, color: tag0Color });
      }

      if (tag1Name && tag1Color) {
        tags.push({ name: tag1Name, color: tag1Color });
      }

      const post = {
        authorName: authorName,
        authorEmail: authorEmail,
        authorPhotoURL: authorPhotoURL,
        authorType: authorType,
        type: type,
        link: link,
        body: body,
        imageURL: imageURL,
        youtubeVideoId: youtubeVideoId,
        timestamp: Date.now(),
        bulletPoints: bulletPoints,
        tags: tags,
      };

      try {
        const collectionRef = collection(db, "projects", projectId, "posts");
        const postDocRef = await addDoc(collectionRef, post);
        console.log("Successfully added: ", postDocRef.id);
      } catch (e) {
        console.log("error:", e);
      }
    }
    addPost();
  };

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Author:
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="">Choose author field</option>
              <option value="halit">Halit</option>
              <option value="burke">Burke</option>
              <option value="burak">Burak</option>
              <option value="eren">Eren</option>
              <option value="github">Github</option>
              <option value="startup">Startup</option>
              <option value="news">News</option>
              <option value="academic">Academic</option>
              <option value="event">Event</option>
            </select>
          </label>
          <br />

          <label>
            Link:
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <label>
            Body:
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>

          <label>
            Bullet Point 0:
            <input
              type="text"
              value={bulletPoint0}
              onChange={(e) => setBulletPoint0(e.target.value)}
            />
          </label>

          <label>
            Bullet Point 1:
            <input
              type="text"
              value={bulletPoint1}
              onChange={(e) => setBulletPoint1(e.target.value)}
            />
          </label>

          <label>
            Bullet Point 2:
            <input
              type="text"
              value={bulletPoint2}
              onChange={(e) => setBulletPoint2(e.target.value)}
            />
          </label>

          <label>
            Bullet Point 3:
            <input
              type="text"
              value={bulletPoint3}
              onChange={(e) => setBulletPoint3(e.target.value)}
            />
          </label>

          <label>
            Tag 0 Name
            <input
              type="text"
              value={tag0Name}
              onChange={(e) => setTag0Name(e.target.value)}
            />
          </label>

          <label>
            Tag 0 Color
            <input
              type="text"
              value={tag0Color}
              onChange={(e) => setTag0Color(e.target.value)}
            />
          </label>

          <label>
            Tag 1 Name
            <input
              type="text"
              value={tag1Name}
              onChange={(e) => setTag1Name(e.target.value)}
            />
          </label>

          <label>
            Tag 1 Color
            <input
              type="text"
              value={tag1Color}
              onChange={(e) => setTag1Color(e.target.value)}
            />
          </label>

          <label>
            Type:
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Choose type</option>
              <option value="youtube">Youtube</option>
              <option value="image">Image</option>
              <option value="link">Link</option>
              <option value="text">text</option>
            </select>
          </label>
          <label>
            Image URL:
            <input
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </label>
          <br />
          <label>
            Youtube Video ID:
            <input
              type="text"
              value={youtubeVideoId}
              onChange={(e) => setYoutubeVideoId(e.target.value)}
            />
          </label>
          <br />

          <br />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AdminPage;
