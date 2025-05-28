import { Heading, Text, Caption, Section, Input, Label, Select } from '../ui';

export function FormShowcase() {
  return (
    <Section spacing="md">
      <Heading level={2}>Form Components</Heading>
      
      <div style={{ marginBottom: 'var(--space-8)' }}>
      <Heading level={3}>Input & Label Components</Heading>
      <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
      The Input and Label components work together to provide consistent form inputs with accessibility.
      </Text>
        
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 'var(--space-6)'
        }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Input Types</Heading>
            <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" type="text" placeholder="Enter some text..." />
              </div>
              <div>
                <Label htmlFor="number-input">Number Input</Label>
                <Input id="number-input" type="number" placeholder="Enter a number..." />
              </div>
              <div>
                <Label htmlFor="email-input">Email Input</Label>
                <Input id="email-input" type="email" placeholder="Enter your email..." />
              </div>
              <div>
                <Label htmlFor="password-input">Password Input</Label>
                <Input id="password-input" type="password" placeholder="Enter password..." />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Input Sizes</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="small-input" size="sm">Small Input</Label>
                <Input id="small-input" size="sm" placeholder="Small input..." />
              </div>
              <div>
                <Label htmlFor="base-input">Base Input (Default)</Label>
                <Input id="base-input" size="base" placeholder="Base input..." />
              </div>
              <div>
                <Label htmlFor="large-input" size="lg">Large Input</Label>
                <Input id="large-input" size="lg" placeholder="Large input..." />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Input States</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="normal-input">Normal State</Label>
                <Input id="normal-input" placeholder="Click to focus and see border change" />
              </div>
              <div>
                <Label htmlFor="error-input">Error State</Label>
                <Input id="error-input" state="error" placeholder="This input has an error" />
              </div>
              <div>
                <Label htmlFor="success-input">Success State</Label>
                <Input id="success-input" state="success" placeholder="This input is valid" />
              </div>
              <div>
                <Label htmlFor="disabled-input">Disabled State</Label>
                <Input id="disabled-input" disabled placeholder="This input is disabled" />
              </div>
            </div>
          </div>

          <div>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Required Labels</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="required-input" required>Required Field</Label>
                <Input id="required-input" required placeholder="This field is required" />
              </div>
              <div>
                <Label htmlFor="optional-input">Optional Field</Label>
                <Input id="optional-input" placeholder="This field is optional" />
              </div>
            </div>
          </div>
        </div>
        
        <Caption>
          Usage: Input with type (text, number, email, password), size (sm, base, lg), state (default, error, success), and Label with required prop
        </Caption>
      </div>
      
      {/* Select Component Showcase */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <Heading level={3}>Select Component</Heading>
        <Text color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
          The Select component provides dropdown selections with consistent styling and accessibility.
        </Text>
        
        <div style={{ 
          padding: 'var(--space-6)', 
          backgroundColor: 'white',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: 'var(--space-6)'
        }}>
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Select Options</Heading>
            <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <Label htmlFor="investment-type">Investment Type</Label>
                <Select
                  id="investment-type"
                  placeholder="Choose investment type"
                  options={[
                    { value: 'stocks', label: 'Stocks' },
                    { value: 'bonds', label: 'Bonds' },
                    { value: 'mutual-funds', label: 'Mutual Funds' },
                    { value: 'etfs', label: 'ETFs' },
                    { value: 'real-estate', label: 'Real Estate' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="risk-level">Risk Level</Label>
                <Select
                  id="risk-level"
                  placeholder="Select risk tolerance"
                  options={[
                    { value: 'conservative', label: 'Conservative' },
                    { value: 'moderate', label: 'Moderate' },
                    { value: 'aggressive', label: 'Aggressive' },
                    { value: 'very-aggressive', label: 'Very Aggressive' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="time-horizon">Time Horizon</Label>
                <Select
                  id="time-horizon"
                  defaultValue="10-years"
                  options={[
                    { value: '1-year', label: '1 Year' },
                    { value: '5-years', label: '5 Years' },
                    { value: '10-years', label: '10 Years' },
                    { value: '20-years', label: '20 Years' },
                    { value: '30-years', label: '30+ Years' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="account-type">Account Type</Label>
                <Select
                  id="account-type"
                  options={[
                    { value: 'taxable', label: 'Taxable Account' },
                    { value: 'traditional-ira', label: 'Traditional IRA' },
                    { value: 'roth-ira', label: 'Roth IRA' },
                    { value: '401k', label: '401(k)' },
                    { value: 'hsa', label: 'HSA', disabled: true }
                  ]}
                />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Select Sizes</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="small-select" size="sm">Small Select</Label>
                <Select
                  id="small-select"
                  size="sm"
                  placeholder="Small dropdown"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="base-select">Base Select (Default)</Label>
                <Select
                  id="base-select"
                  size="base"
                  placeholder="Base dropdown"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="large-select" size="lg">Large Select</Label>
                <Select
                  id="large-select"
                  size="lg"
                  placeholder="Large dropdown"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Select States</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="normal-select">Normal State</Label>
                <Select
                  id="normal-select"
                  placeholder="Click to see focus state"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="error-select">Error State</Label>
                <Select
                  id="error-select"
                  state="error"
                  placeholder="This select has an error"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="success-select">Success State</Label>
                <Select
                  id="success-select"
                  state="success"
                  defaultValue="option1"
                  options={[
                    { value: 'option1', label: 'Valid Selection' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="disabled-select">Disabled State</Label>
                <Select
                  id="disabled-select"
                  disabled
                  placeholder="This select is disabled"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                />
              </div>
            </div>
          </div>

          <div>
            <Heading level={4} style={{ marginBottom: 'var(--space-4)' }}>Required Select Fields</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '400px' }}>
              <div>
                <Label htmlFor="required-select" required>Required Selection</Label>
                <Select
                  id="required-select"
                  required
                  placeholder="Please select an option"
                  options={[
                    { value: 'low', label: 'Low Risk' },
                    { value: 'medium', label: 'Medium Risk' },
                    { value: 'high', label: 'High Risk' }
                  ]}
                />
              </div>
              <div>
                <Label htmlFor="optional-select">Optional Selection</Label>
                <Select
                  id="optional-select"
                  placeholder="This field is optional"
                  options={[
                    { value: 'quarterly', label: 'Quarterly' },
                    { value: 'annually', label: 'Annually' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        
        <Caption>
          Usage: Select with options array, size (sm, base, lg), state (default, error, success), placeholder, and disabled options
        </Caption>
      </div>
    </Section>
  );
}