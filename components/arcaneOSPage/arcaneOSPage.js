// components/arcaneOSPage/arcaneOSPage.js
import React from 'react';
import styles from './index.module.css';

const ArcaneOSPage = () => {
  return (
      <div className="container">
        <h3>What is Flux Arcane OS?</h3>
        <p>
          Arcane is a full operating system based on Ubuntu 24.04, developed by Influx Technologies Limited to enhance security and privacy in the Flux Cloud network. It also serves as a foundation for future products.
        </p>

        <h3>Key Features</h3>
        <ol>
          <li><span>Easy Installation</span>
            <p>
              Delivered via bootable ISO with an intuitive graphic interface, Arcane OS installs in minutes with just a few clicks.
            </p>
          </li>
          <li><span>Verifiable Runtime Environment</span>
            <p>
              Arcane OS integrates Secure Boot, a Unified Kernel Image, dm-verity, and the System Attestation Service (SAS) to ensure the OS remains unmodified.
            </p>
          </li>
          <li><span>Minimal User Intervention</span>
            <p>
              The Flux Node install process is streamlined and supports multiple configuration approaches — manual, automated, or via `.yaml`/`.json` files.
            </p>
          </li>
          <li><span>Encrypted LVM Layout</span>
            <p>
              System and application data are stored on separate partitions within an LVM structure, all encrypted via TPM (if available) and LUKS using SAS-generated keys.
            </p>
          </li>
          <li><span>System Attestation Service (SAS)</span>
            <p>
              SAS continuously verifies OS file and package integrity, prevents unauthorized modifications, and ensures the system is booting from a trusted image. Any detected tampering wipes the disk, rendering the OS unbootable.
            </p>
          </li>
          <li><span>Live Monitoring</span>
            <p>
              SAS also actively monitors users and detects unauthorized system changes or anomalies.
            </p>
          </li>
          <li><span>Role-Based Access Control</span>
            <p>
              Only two user roles exist — <code>console</code> (local access) and <code>operator</code> (SSH via key). Root access is entirely disabled. Even physically removing the disk won't help — it's fully encrypted.
            </p>
          </li>
          <li><span>Update Strategy</span>
            <p>
              Arcane OS is updated via complete image releases, ensuring consistent software versions across the network. Node operators don’t need to manage OS updates themselves.
            </p>
          </li>
          <li><span>Flux Gravity Integration</span>
            <p>
              Formerly FluxOS, Flux Gravity is the decentralized orchestrator. Arcane enhances it by removing manual app placement, supporting encrypted specs, and reducing attack surfaces.
            </p>
          </li>
        </ol>
      </div>
  );
};

export default ArcaneOSPage;
