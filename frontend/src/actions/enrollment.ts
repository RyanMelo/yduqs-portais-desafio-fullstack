import { Modality } from "@/types/Courses";

export type EnrollmentData = {
  id?: string,
  totalValue?: number | null
  numberOfInstallments?: number | null
  courseType: Modality,
  name: string
  documentNumber: string
  birthdate: string
  email: string
  phone: string
  highSchoolGraduation: number
  terms: boolean
  whatsAppNotifications?: boolean | null
}

export type EnrollmentResponse = {
  success: true;
  data: { id: string };
} | {
  success: false;
  error: {
    message: string | string[];
    statusCode: number;
  };
};

export async function createEnrollment(enrollmentData: EnrollmentData): Promise<EnrollmentResponse> {
  try {
    const response = await fetch('http://localhost:3001/enrollment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollmentData),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    }

    const errorData = await response.json();
    return {
      success: false,
      error: {
        message: errorData.message || 'Ocorreu um erro.',
        statusCode: response.status,
      },
    };
  } catch (error) {
    console.error('Error creating enrollment:', error);
    return {
      success: false,
      error: {
        message: 'Ocorreu um error ao realizar sua matricula, tente novamente mais tarde',
        statusCode: 500,
      },
    };
  }
}
