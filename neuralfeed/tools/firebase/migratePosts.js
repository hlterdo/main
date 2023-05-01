const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const {
  updateDoc,
  doc,
  addDoc,
  collection,
  getDoc,
  arrayUnion,
  getDocs,
  query,
} = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAFZ8q6WWjWmfjysO8c570IEk6BG33wNMw",
  authDomain: "neuralfeed-748c8.firebaseapp.com",
  projectId: "neuralfeed-748c8",
  storageBucket: "neuralfeed-748c8.appspot.com",
  messagingSenderId: "899924620177",
  appId: "1:899924620177:web:03595b077a96d77ab1a030",
  measurementId: "G-CVQZL489YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

if (!db) {
  console.error("Database is not initialized properly.");
  return;
}

console.log("Database is initialized");

async function migratePosts() {
  const fromProjectId = "qYQQxo0ISUnyyCmesVTD";
  const toProjectId = "iZwV2qa9YoWMNbfh3lYR";

  const fromProject = await getDoc(doc(db, "projects", fromProjectId));

  const toProject = {
    name: fromProject.data().name + " (Copy)",
    mission: fromProject.data().mission,
    teamMembers: fromProject.data().teamMembers,
    teamMemberEmails: fromProject.data().teamMemberEmails,
    admins: fromProject.data().admins,
  };

  console.log("toProject: ", toProject);

  const projectsCollectionRef = collection(db, "projects");

  const toProjectRef = await addDoc(projectsCollectionRef, toProject);

  console.log("New project is added: ", toProjectRef.id);

  const toProjectPostsCollectionRef = collection(
    db,
    "projects",
    toProjectRef.id,
    "posts"
  );

  for (const post of fromProject.data().posts) {
    const postDocRef = await addDoc(toProjectPostsCollectionRef, post);
    console.log("post", postDocRef.id, " added");
  }

  const toProjectAgain = await getDoc(doc(db, "projects", toProjectRef.id));

  console.log("toProjectAgain: ", toProjectAgain.data());

  const postDocs = await getDocs(query(toProjectPostsCollectionRef));

  console.log("postDocs.docs[0].data():", postDocs.docs[0].data());

  console.log("DONE");
}

migratePosts();
