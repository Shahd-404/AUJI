// 📁 src/pages/CoursesPage.jsx
import CoursesHero from '../components/cours-hero-main';
import CourseRecommendations from '../components/cours-recommendations';
import CourseTrendingWeek from '../components/cours-trending-week';
import CourseLearningTracks from '../components/cours-learning-tracks';
import CourseWeeklyChallenge from '../components/cours-weekly-challenge';
import CourseCertificatesAndBadges from '../components/cours-certificates-badges';
import CourseLeaderboard from '../components/cours-leaderboard';

export default function CoursesPage() {
  return (
    <main className="flex flex-col gap-24 mb-20">
      <section id="hero"><CoursesHero /></section>  
      <section id="ai"><CourseRecommendations /></section>
      <section id="trending"><CourseTrendingWeek /></section>
      <section id="tracks"><CourseLearningTracks /></section>
      <section id="challenge"><CourseWeeklyChallenge /></section>
      <section id="certificates"><CourseCertificatesAndBadges /></section>
      <section id="leaderboard"><CourseLeaderboard /></section>
    </main>
  );
}
