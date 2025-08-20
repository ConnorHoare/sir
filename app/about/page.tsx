import EnvironmentalPolicySection from '@/components/EnvironmentalPolictSection'
import QualityAndSafetySection from '@/components/QualityAndSafetySection'
import TrainingEducationSection from '@/components/TrainingEducationSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <main>
            <QualityAndSafetySection />
            <EnvironmentalPolicySection />
            <TrainingEducationSection />
        </main>
    </div>
  )
}

export default page